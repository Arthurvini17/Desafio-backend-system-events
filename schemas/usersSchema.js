const { z, email } = require("zod");

const createUserSchema = z.object({
    nome: z.string().min(2, "Nome do usuario muito curto"),
    email: z.email().nonempty("o campo deve ser um email"),
    password: z.string().nonempty("o campo deve ser com uma senha"),
    telefone: z.string().nonempty("o campo deve ser preenchido"),
});

module.exports = createUserSchema; 
