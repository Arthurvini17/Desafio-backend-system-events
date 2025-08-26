const usersServices = require('../Services/UsersServices');
const bcrypt = require('bcryptjs');


module.exports = {

    getAllUsers: async (req, res) => {

        try {
            const users = await usersServices.getAllUsers()

            if (users.length === 0) {
                return res.json({ message: 'não existem usuarios' });
            }
            return res.status(200).json({ data: users })
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'erro no server' });
        }
    },

    getUserById: async (req, res) => {
        const { id } = req.params;

        if (!id || isNaN(id)) {
            return res.status(404).json({ message: 'ID invalido' })
        }
        try {
            const userById = await usersServices.getUserById(id);
            if (userById.length === 0) {
                return res.status(404).json({ message: 'não existem usuarios' });
            }
            return res.status(200).json({ data: userById });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'erro no server' })
        }
    },

    createUser: async (req, res) => {

        const { nome, email, password, telefone } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const creatingUser = await usersServices.createUser({
                nome, email, telefone, password: hashedPassword
            })
            return res.status(201).json({ message: 'user criado', creatingUser })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'erro no server' });
        }
    },


    editUser: async (req, res) => {
        const { id } = req.params;

        const { nome, email, telefone, password } = req.body;

        if (!id || isNaN(id)) {
            return res.status(200).json({ message: 'ID invalido' });
        }

        try {


            let hashedPassword;
            if (password) {
                hashedPassword = await bcrypt.hash(password, 10);
            }

            const editingUser = await usersServices.editUser(id, {
                nome,
                email,
                telefone,
                ...(hashedPassword && { password: hashedPassword })
            });

            return res.status(200).json({ message: 'user editado', editingUser });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'error no server' });
        }
    }
}

