const { ZodError } = require("zod");

const validateSchema = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                const errors = error.issues.map(issue => ({
                    path: issue.path.join('.'),
                    message: issue.message
                }));
                return res.status(400).json({ errors });
            }

            return res.status(400).json({ message: 'erro de validação desconhecido' });
        }
    };
};

module.exports = validateSchema;
