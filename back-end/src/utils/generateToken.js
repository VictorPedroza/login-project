const jwt = require("jsonwebtoken");

const GenerateToken = (user) => {
    const JWT_SECRET = process.env.JWT_SECRET;

    if (!JWT_SECRET) {
        return { message: "Erro no JWT_SECRET" }
    }

    const token = jwt.sign(
        { id: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: "2h" }
    )

    return token
}

module.exports = { GenerateToken };