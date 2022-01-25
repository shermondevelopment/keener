import express from 'express'

const app = express()
app.set('view engine', 'ejs')
app.set('view', './views')

app.listen(3002, () => console.log('app running 🧨🧨🧨🧨🧨'))
