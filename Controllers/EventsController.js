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
    },

    listAllEvents: async (req, res) => {
        try {
            const events = await EventsServices.listAllEvents();

            if (events.length === 0) {
                return res.status(400).json({ message: 'Não existem eventos' });
            }

            return res.status(200).json({ data: events })
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor', error })
        }
    },

    CreateEvent: async (req, res) => {
        const {
            Nome,
            descricao,
            data,
            local
        } = req.body;

        //convertendo os dados
        const datas = {
            Nome,
            descricao,
            data: new Date(data),
            local
        }
        try {
            const createEvents = await EventsServices.CreateEvent(datas);
            return res.status(201).json({ message: 'evento criado', createEvents });
        } catch (error) {
            return res.status(500).json({ message: 'erro no server', error })
        }
    }
};
