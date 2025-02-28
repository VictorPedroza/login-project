const { body, validationResult } = require("express-validator");

const LoginValidate = [
  // Verifica se o email foi enviado e se tem um formato válido
  body('email')
    .notEmpty().withMessage('E-mail é obrigatório')
    .isEmail().withMessage('Formato de E-mail inválido'),

  // Verifica se a senha foi enviada e se tem no mínimo 6 caracteres
  body('password')
    .notEmpty().withMessage('Senha é obrigatório')
    .isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres'),

  // Middleware final para verificar erros
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next(); // Se não houver erros, continua para o controller
  }
];

module.exports = LoginValidate;
