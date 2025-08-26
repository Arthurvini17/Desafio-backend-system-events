const { z } = require("zod");

const createEventSchema = z.object({
    nome: z.string().min(2, "nome do evento deve ter pelo menos 2 caracteres"),
    descricao: z.string().nonempty("o campo deve ser preenchido"),
    data: z.string().refine(val => !isNaN(Date.parse(val)), "o campo deve ser uma data"),
    local: z.string().nonempty("o campo deve ser preenchido"),
    limiteVagas: z.number().int().positive().nullable(),
});

module.exports = createEventSchema; 
