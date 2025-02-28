const bcrypt = require("bcryptjs");

const hashPasword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

const comparePassword = async (password, hashPasword) => {
    return await bcrypt.compare(password, hashPasword);
}

module.exports = { hashPasword, comparePassword }