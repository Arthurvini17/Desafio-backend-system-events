const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');


async function getAllUsers() {
    return prisma.user.findMany({})
}

async function getUserById(userId) {
    return prisma.user.findFirst({
        where: { id: Number(userId) }
    })
}

async function createUser(data) {
    return prisma.user.create({
        data: {
            ...data
        }
    })
}


async function editUser(userId, data) {
    return prisma.user.update({
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