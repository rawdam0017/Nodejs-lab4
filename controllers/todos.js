const fs = require('fs')

const Todo = require('../models/todos')

const findone = (id) => {
     return Todo.findById(id)
}

const create = (title,tags) => {
    const todo = { title,tags }
    return Todo.create(todo);
}

const delet =(id)=>{
    return Todo.findByIdAndRemove(id)
}





module.exports = {
    findone,
    create,
    delet
}