
function registerValidator(data, callback) {
     console.log(data)
     if (data.name === undefined) {
          return callback({
               message: "Please enter your Name"
          })
     }
     if (data.email === undefined) {
          return callback({
               message: "Please enter your Email address"
          })
     }
     if (data.password === undefined) {
          return callback({
               message: "Please enter your Password"
          })
     }

     if (data.Comfirm_Password === undefined) {
          return callback({
               message: "Please enter your Comfirm Password"
          })
     }

     if (data.password !== data.Comfirm_Password) {
          return callback({
               message: "Comfirm Password should be match to Password"
          })
     }

}

function loginValidator(data, callback) {

     if (data.email === undefined) {
          return callback({
               message: "Please enter your Email address"
          })
     }
     if (data.password === undefined) {
          return callback({
               message: "Please enter your Password"
          })
     }

}


module.exports = {
     registerValidator,
     loginValidator
}
