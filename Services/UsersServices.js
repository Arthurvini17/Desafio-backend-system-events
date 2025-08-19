const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();


async function getAllUsers() {
    return prisma.users.findMany({})
}

module.exports = {
    getAllUsers
}