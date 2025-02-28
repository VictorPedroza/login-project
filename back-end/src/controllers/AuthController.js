const AuthService = require("../services/AuthService");

class UserController {
    async register(req, res) {
        const { name, email, password } = req.body;

        const loginUser = await AuthService.register(name, email, password);

        if (loginUser.message) {
            return res.status(400).json({
                message: loginUser.message
            })
        }

        return res.status(200).json({
            message: "✅ Usuário criado com sucesso",
            user: {
                id: loginUser.id,
                name: loginUser.name,
                email: loginUser.email
            }
        })
    }
}

module.exports = new UserController();