require('dotenv').config();

const AuthServices = require('../Services/AuthServices')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
    auth: async (req, res) => {
        const { email, password } = req.body;


        try {
            const authenticated = await AuthServices.auth(email, password);
            if (!authenticated) {
                return res.status(401).json({ message: 'Erro ao fazer login' });
            }

            const token = jwt.sign({ id: authenticated.id }, process.env.JWT_SECRET, { expiresIn: '1h' })

            res.json({ token });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'erro no server' });
        }
    },


    protected: async (req, res) => {
        res.json({ message: 'voce acessou aqui' });
    }
}