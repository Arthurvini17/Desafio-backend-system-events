const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');


async function getAllUsers() {
    return prisma.users.findMany({})
}

async function getUserById(userId) {
    return prisma.users.findFirst({
        where: { id: Number(userId) }
    })
}

async function createUser(data) {
    return prisma.users.create({
        data: {
            ...data
        }
    })
}


async function editUser(userId, data) {
    return prisma.users.update({
        data: {
            ...data
        },
        where: {
            id: Number(userId)
        }
    })
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    editUser
}