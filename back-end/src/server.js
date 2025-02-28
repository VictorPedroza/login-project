const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "API is Running 🚀"
    })
});

const AppRoutes = require("./routes");
app.use("/api", AppRoutes);

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.listen(PORT, () => {
    console.log("✅ API is Running on:", NODE_ENV);
});