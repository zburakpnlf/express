var express = require('express')
var router = express.Router()
const https = require('https')


router.get('/', (req, res) => {
    https.get('https://yesno.wtf/api', (response) => {
        response.on('data', (d) => {
            const json = JSON.parse(d.toString('utf8'))
            // console.log(json.answer)
            res.render('report', { title: 'report2101100142', answer: json.answer, imgSrc: json.image })
        })
    }).on('error', (e) => {
        console.log(e)
        res.send('error occurred')
    })
})

module.exports = router
