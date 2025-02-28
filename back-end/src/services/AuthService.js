class UserService {
    static async register(name, email, password) {
        return {
            message: "Ok!",
            name: name,
            email: email,
            password: password
        }
    }
}

const users = [];

module.exports = UserService;