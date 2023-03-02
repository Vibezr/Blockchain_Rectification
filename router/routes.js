const express = require("express");
const router = express.Router();
const {create} = require("../controller/controller")


// router.get('/', (req, res) => {
//     res.sendFile(__dirname + "/wallets.html")
// })


router.route('/').post(create)





module.exports = router