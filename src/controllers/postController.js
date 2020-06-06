const Post = require('../models/post')

module.exports = {
    async store(req, res) {
        try {
            const dataPost = req.body
            const post = await Post.create(dataPost)
            return res.json(post)
        }
        catch{
            return res.status(400).send({ error: 'Não foi  possível criar  publicação' })
        }
    },
    async show(req, res) {
        try {
            const posts = await Post.find(req.body)
            return res.json(posts)
        }
        catch{
            return res.status(400).send({ error: 'Não foi  possível encontrar suas publicações' })
        }
    },
    async update(req, res) {
        try {
            const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
            return res.json(post)
        }
        catch{
            return res.status(400).send({ error: 'Não foi  possível alterar está publicação' })
        }
    },
    async delete(req, res) {
        try {
            await Post.findByIdAndRemove(req.params.id)
            return res.status(200).send({ sucess: 'Publicação removida com sucesso !' })
        }
        catch{
            return res.status(400).send({ error: 'Não foi  possível remover está publicação' })
        }
    },
    async showPost(req, res) {
        try {
            const posts = await Post.findById(req.params.id)
            return res.json(posts)
        }
        catch{
            return res.status(400).send({ error: 'Não foi  possível encontrar está publicação' })
        }
    }

}
