const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    return res.status(200).json({
        message: "✅ User route API is Running"
    })
})

const AuthRoute = require("./AuthRoute");
router.use("/", AuthRoute);

module.exports = router;