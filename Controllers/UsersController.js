const usersServices = require('../Services/UsersServices');


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
    }

}