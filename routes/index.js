const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

// to export the router where imports it
module.exports = router 
