const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

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