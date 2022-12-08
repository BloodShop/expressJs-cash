const express = require('express');
const router = express.Router();

router.use(logger);

router.get('/', auth, (req, res) => {
    console.log(`User is admin = ${req.admin}`);

    console.log(req.query.name);
    res.send('User list');
})

router.get('/new', (req, res) => {
    res.render('users/new'/* , { firstName: 'test' } */);
})

router.post('/', (req, res) => {
    const isValid = true;
    if(isValid) {
        users.push({ firstName: req.body.firstName });
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log('Error');
        res.render('users/new', { firstName: req.body.firstName })
    }
})

router.route('/:id')
    .get((req, res) => {
        console.log(req.user);
        res.send(`User Get by id ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Update User by id ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`Delete User by id ${req.params.id}`);
    });
    /* Instead of the bellow code */

/* router.get('/:id', (req, res) => { /* depend on line the, can get the new as param
    res.send(`User Get by id ${req.params.id}`)
})

router.put('/:id', (req, res) => {
    res.send(`Update User by id ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`Delete User by id ${req.params.id}`)
}) */

const users = [{name : 'Alon'}, {name: 'Itay'}]

/* Middleware */
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next();
})

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

function auth(req, res, next) {
    if(req.query.admin === 'true') {
        req.admin = true;
        next();
    } else {
        res.send('No auth!!');
    }
}

module.exports = router