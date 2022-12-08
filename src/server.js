const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { text: 'wazzzap' })
    // res.download('src/index.js') // Donwload the file
    // res.status(500).json({ message: 'Error' })
})

const userRouter = require('../routes/users')
app.use('/users', userRouter)

function logger(req, res, next) {

}

app.listen(3000)