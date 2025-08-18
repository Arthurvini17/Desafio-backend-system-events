const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();


async function listAllEvents() {
    return prisma.events.findMany({})
}

async function getEvent(eventId) {
    return prisma.events.findUnique({
        where: { id: Number(eventId) }
    });
}


module.exports = {
    getEvent,
    listAllEvents
};
