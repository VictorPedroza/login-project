const User = require("../models/User");
const { hashPasword } = require("../utils/hashPassword");

class UserService {
    static async register(name, email, password) {
        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
            return { message: "Usuário já criado" }
        }

        const hashedPassword = await hashPasword(password);

        const newUser = new User(Date.now(), name, email, hashedPassword);

        users.push(newUser);

        return newUser;
    }
}

const users = [];

module.exports = UserService;