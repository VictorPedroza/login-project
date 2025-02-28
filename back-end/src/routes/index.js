const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    return res.status(200).json({
        message: "✅ Genereal route API is Running"
    })
})

module.exports = router;