const users = require('../Models/userModels')
const usersDetails = require('../Models/userDetailModel')
const bcryptjs = require('bcryptjs');
const auth = require('../Middlewares/auth')


async function login({ email, password }, callback) {
     const user = await users.findOne({ email });
     if (user != null) {
          if (bcryptjs.compareSync(password, user.password)) {
               const token = auth.generateAccessToken(user)
               return callback(null, { ...user.toJSON(), token })
          } else {
               return callback({
                    message: "Invalid Email and Password"
               })
          }

     } else {
          return callback({
               message: "Invalid Email and Password"
          })
     }
}


async function register(params, callback) {
     // console.log(params)
     const user = new users(params)
     user.save().then((response) => {
          const userdetail = new usersDetails({ userId: user, email: response.email })
          userdetail.save()
          console.log(userdetail)
          return callback(null, response)
     }).catch((err) => {
          return callback(err)
     })
}

async function userprofile({ params, data }, callback) {
     console.log(params, data)

     const email = data.email
     usersDetails.findOne({ email })
          .exec((err, user) => {
               if (err) {
                    return callback({
                         message: err
                    });
               }
               if (!user) {
                    return callback({
                         message: "User Not found."
                    });
               } else {
                    return callback(null, user.toJSON());
               }

          }
          )
}

async function userprofileupdate({ params, data }, callback) {
     console.log(params, data)


     usersDetails.findOneAndUpdate({ _id: params }, { $set: data })
          .exec((err, user) => {
               console.log(user)
               if (err) {
                    return callback({
                         message: err
                    });
               }
               if (!user) {
                    return callback({
                         message: "User Not found."
                    });
               } else {
                    return callback(null, user.toJSON());
               }

          }
          )
}

module.exports = {
     login,
     register,
     userprofile,
     userprofileupdate
}