const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();


async function listAllEvents() {
    return prisma.event.findMany({})
}

async function getEvent(eventId) {
    return prisma.event.findUnique({
        where: { id: Number(eventId) },
    });
}

async function createEvent(datas, userId) {
    return prisma.event.create({
        data: {
            ...datas,
            creatorId: userId
        }
    });
}

async function editEvent(eventId, datas) {
    return prisma.event.update({
        where: { id: Number(eventId) },
        data: { ...datas }
    });
}

async function deleteEvents(eventId, userId) {
    return prisma.event.deleteMany({
        where: {
            id: Number(eventId),
            creatorId: userId
        }
    });
}



module.exports = {
    getEvent,
    listAllEvents,
    createEvent,
    editEvent,
    deleteEvents,

};
