const express  = require('express')
const routes  = express.Router()

const postController = require('./controllers/postController')

routes.post('/create', postController.store)
routes.get('/posts', postController.show)
routes.put('/repost/:id', postController.update)
routes.delete('/delete/:id', postController.delete)
routes.get('/showpost/:id', postController.showPost)

module.exports = routes
