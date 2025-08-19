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
    }
}