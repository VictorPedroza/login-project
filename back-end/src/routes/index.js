const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    return res.status(200).json({
        message: "✅ Genereal route API is Running"
    });
});

const UserRoute = require("./User");
router.use("/user", UserRoute);

module.exports = router;