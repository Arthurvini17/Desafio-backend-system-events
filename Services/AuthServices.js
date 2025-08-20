const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

//função de authenticado
async function auth(email, password) {

    //faz a busca pelo email passado pelo body
    const user = await prisma.users.findFirst({
        where: { email }
    });
    if (!user) return null

    //faz a comparação com o a senha passado pelo body, com o user que esta com token
    const hashedPassword = await bcrypt.compare(password, user.password);
    if (!hashedPassword) return null

    return user;
}

module.exports = {
    auth
}