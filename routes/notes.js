var express = require('express')
var router = express.Router()

const { MongoClient } = require('mongodb')
const uri = "mongodb+srv://oizuiadsxapjbazmebyi:nAUHJraWUrYsAeJjAnBnxPwRE7YGAjzfez2c3Gsx@cluster0.4lozqs7.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)

router.get('/', async (req, res) => {
    // データベース、コレクションを指定
    const database = client.db('notes')
    const notes = database.collection('notes')

    // idが1のドキュメントを取得
    const query = { id: 1 }
    const note = await notes.findOne(query)

    res.json(note)
})

module.exports = router
