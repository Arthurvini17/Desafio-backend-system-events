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

async function CreateEvent(datas) {
    return prisma.events.create({
        data: {
            ...datas
        }
    });
}


module.exports = {
    getEvent,
    listAllEvents,
    CreateEvent,
};
