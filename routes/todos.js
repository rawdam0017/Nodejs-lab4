const fs = require('fs')
const express = require("express");
const todosController = require('../controllers/todos');
const auth = require('../middleware/auth');
const router = express.Router();

router.use(auth)

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    todosController.findone(id)
        .then((todo) => {
            if (!todo) {
                res.status(404).end();
                return;
            }
            res.json(todo)
        })
        .catch(e => {
            res.status(500).json(e)
        })
})

router.post('/', (req, res, next) => {
    const { title } = req.body;
    const { tags } = req.body;
    todosController.create(title, tags)
        .then((todo) => {
            res.json(todo);
        })
        .catch(e => res.status(422).json(e))
})

router.patch('/:id', (req, res, next) => {
    const { id } = req.params;
    todosController.findone(id)

        .then((todo) => {
            if (!todo) {
                res.status(404).end();
                return;
            }
            const { title } = req.body;
            todo.title = title;
            res.json(todo)
        })
        .catch(e => {
            res.status(500).json(e)
        })
})

router.delete("/:id", (req, res, next) => {
    const { id } = req.params;
    todosController.delet(id)
        .then((todo) => {
            if (!todo) {
                res.status(404).end();
                return;
            }
            ifelse(data.length > deletId.length)
            res.json(todo)
        })
        .catch(e => {
            res.status(500).json(e)
        })


})

router.get('/', (req, res, next) => {
    const data = JSON.parse(fs.readFileSync('./data.json', { encoding: 'utf-8' }));
    res.json(data)


})

module.exports = router;