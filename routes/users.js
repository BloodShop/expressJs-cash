const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User list');
})

router.get('/new', (req, res) => {
    res.send('User new Form');
})

router.post('/', (req, res) => {
    res.send('Create User');
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

module.exports = router