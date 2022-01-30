import 'reflect-metadata'
import express from 'express'
import router from './routes'
import session from 'express-session'
import { MysqlConnect } from './helpers/database'
import path from 'path'
const app = express()
app.use(
  session({
    secret: 'somesecret',
    saveUninitialized: false,
    resave: true
  })
)
app.use(function (req, res, next) {
  res.locals.user = req.session.user
  next()
})
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/public'))

MysqlConnect.connect()
  .then(async () => {
    app.listen(3002, () => console.log('app running in port 5050 🛒🛒🛒'))
  })
  .catch(console.error)
