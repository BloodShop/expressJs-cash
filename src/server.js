const express = require('express');
const app = express()

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { text: 'wazzzap' });
    // res.download('src/index.js') // Donwload the file
    // res.status(500).json({ message: 'Error' })
})

/* app.use(logger); // Going to be invoked only when the routes below are called, not the above */

const userRouter = require('../routes/users');
app.use('/users', userRouter);

/* function logger(req, res, next) {
    console.log(req.originalUrl);
    next();

} */

app.listen(3000);