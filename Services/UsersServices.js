const { getUserById } = require('../Controllers/UsersController');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();


async function getAllUsers() {
    return prisma.users.findMany({})
}

async function getUserById(userId) {
    return prisma.users.findFirst({
        where: { id: Number(userId) }
    })
}

module.exports = {
    getAllUsers,
    getUserById
}