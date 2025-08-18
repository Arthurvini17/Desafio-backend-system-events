const EventsServices = require('../Services/EventsServices');


module.exports = {
    getEvent: async (req, res) => {
        const { id } = req.params;

        if (!id || isNaN(id)) {
            return res.status(400).json({ message: 'ID inválido' });
        }

        try {
            const event = await EventsServices.getEvent(id);

            if (event === 0) {
                return res.status(404).json({ message: 'Evento não encontrado ou não existe' });
            }

            return res.status(200).json({ data: event });
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor', error });
        }
    }
};
