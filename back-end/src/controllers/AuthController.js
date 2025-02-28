const AuthService = require("../services/AuthService");

class UserController {
    async register(req, res) {
        const { name, email, password } = req.body;

        const message = await AuthService.register(name, email,password);

        return res.status(200).json({
            message: "Ok",
            msg: message
        })
    }
}

module.exports = new UserController();