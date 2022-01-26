import 'reflect-metadata'
import express from 'express'
import router from './routes'
import path from 'path'
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/public'))

app.listen(3002, () => console.log('app running 🧨🧨🧨🧨🧨'))
