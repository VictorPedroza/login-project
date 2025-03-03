const UserService = require("../services/AuthService");
const AuthService = require("../services/AuthService");
const { GenerateToken } = require("../utils/generateToken");

class UserController {
    async register(req, res) {
        const { name, email, password } = req.body;

        try {
            const newUser = await AuthService.register(name, email, password);

            if (newUser.message) {
                return res.status(400).json({
                    message: newUser.message
                })
            }

            const token = GenerateToken(newUser);

            res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "PROD",
                sameSite: "strict",
                maxAge: 2 * 60 * 60 * 1000
            });

            return res.status(200).json({
                message: "✅ Usuário criado com sucesso",
                user: {
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email
                },
                token
            })
        } catch (error) {
            return res.status(500).json({
                message: "❌ Erro no servidor",
                error: error
            })
        }
    }

    async login(req, res) {
        const { email, password } = req.body;

        try {
            const loginUser = await UserService.login(email, password);

            if (loginUser.message) {
                return res.status(400).json({
                    message: loginUser.message
                })
            }

            const token = GenerateToken(loginUser);

            res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "PROD",
                sameSite: "strict",
                maxAge: 2 * 60 * 60 * 1000
            });

            return res.status(200).json({
                message: "✅ Usuário logado",
                user: {
                    id: loginUser.id,
                    name: loginUser.name,
                    email: loginUser.email
                },
                token
            })

        } catch (error) {
            return res.status(500).json({
                message: "❌ Erro no servidor",
                error: error
            })
        }
    }

    async logout(req, res) {
        try {
            res.clearCookie("token");

            return res.status(200).json({
                message: "✅ Usuário desconectado"
            })
        } catch (error) {
            return res.status(500).json({
                message: "❌ Erro no servidor",
                error: error
            })
        }
    }
}

module.exports = new UserController();