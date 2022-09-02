const express = require('express');
const mongoose = require('mongoose');
const dbconfig = require('./Config/DBconfig')

const auth = require('./Middlewares/auth')
const error = require('./Middlewares/error')

const unless = require('express-unless')


const app = express()

// mongoose.Promise = global.Promise
mongoose.connect(dbconfig.db, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(
     () => {
          console.log("Database connected")
     },
     (error) => {
          console.log("Database can't be connected: ", error)
     }
)

// auth.authenticateToken.unless = unless;
// app.use(
//      auth.authenticateToken.unless({
//           path: [
//                { url: "/users/login", method: ["POST"] },
//                { url: "/users/register", method: ["POST"] },
//           ]
//      })
// )

app.use(express.json())


app.use("/users", require('./Routes/usersRoutes'))

app.use(error.errorHandler)


app.listen(process.env.port || 4000, function () {
     console.log("......... SERVER STARTED ......... ")
})

