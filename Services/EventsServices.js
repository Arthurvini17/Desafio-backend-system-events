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

async function createEvent(datas) {
    return prisma.events.create({
        data: {
            ...datas
        }
    });
}

async function editEvent(eventId, datas) {
    return prisma.events.update({
        where: { id: Number(eventId) },
        data: { ...datas }
    });
}



module.exports = {
    getEvent,
    listAllEvents,
    createEvent,
    editEvent,

};
