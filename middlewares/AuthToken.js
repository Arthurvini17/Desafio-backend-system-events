const jwt = require('jsonwebtoken');
require('dotenv').config();

function AuthToken(req, res, next) {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ message: "Token não fornecido" });
    }

    // pega só o token (segundo elemento depois do "Bearer")
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Token inválido" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(401).json({ message: "Token inválido ou expirado" });
        }

        // salva infos do usuário no req
        req.user = user;

        next(); // segue a request
    });
}

module.exports = AuthToken;
