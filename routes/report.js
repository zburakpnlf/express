var express = require('express')
var router = express.Router()


router.get('/', async (req, res) => {
    const response = await fetch("https://yesno.wtf/api")
    const yesno = await response.json()
    /*
        {
            answer: yes/no
            forced: bool
            image: link
        }
    */
    // console.log(yesno)
    res.render('report', { title: 'report2101100142', answer: yesno.answer, imgSrc: yesno.image })
})

module.exports = router
