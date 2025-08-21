const { subscribe } = require('../Routes/EventsRoutes');
const EventsServices = require('../Services/EventsServices');


module.exports = {
    getEvent: async (req, res) => {
        const { id } = req.params;

        if (!id || isNaN(id)) {
            return res.status(400).json({ message: 'ID inválido' });
        }

        try {
            const event = await EventsServices.getEvent(id);

            if (event.length === 0) {
                return res.status(404).json({ message: 'Evento não encontrado ou não existe' });
            }

            return res.status(200).json({ data: event });
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor', error });
        }
    },

    listAllEvents: async (req, res) => {

        const skip = req.query.skip ? Number(req.query.skip) : undefined;
        const take = req.query.take ? Number(req.query.take) : undefined
        try {
            const events = await EventsServices.listAllEvents(skip, take);

            if (events.length === 0) {
                return res.status(400).json({ message: 'Não existem eventos' });
            }

            return res.status(200).json({ data: events })
        } catch (error) {
            return res.status(500).json({ message: 'Erro no servidor', error })
        }
    },

    createEvent: async (req, res) => {
        const { nome, descricao, data, local, limiteVagas } = req.body;


        //convertendo os dados

        const datas = {
            nome,
            descricao,
            data: new Date(data),
            local,
            limiteVagas,
        };


        try {
            const createEvents = await EventsServices.createEvent(datas,
                req.user.id
            );
            return res.status(201).json({ message: 'evento criado', createEvents });
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'erro no server', error })
        }
    },


    deleteEvents: async (req, res) => {
        const { id } = req.params;

        if (!id || isNaN(id)) {
            return res.status(400).json({ message: 'ID invalido' });
        }

        try {
            const deleteEvent = await EventsServices.deleteEvents(id,
                req.user.id
            );
            return res.status(200).json({ delete: deleteEvent });
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'erro no servidor' });
        }
    },


    editEvent: async (req, res) => {
        const { nome, descricao, data, local } = req.body;
        const { id } = req.params;

        const datas = {
            nome,
            descricao,
            data: new Date(data),
            local
        };



        if (!id || isNaN(id)) {
            return res.status(400).json({ message: 'ID inválido' });
        }

        try {
            const updateEvent = await EventsServices.editEvent(id, datas);
            return res.status(200).json({ message: 'Evento atualizado', updateEvent });
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Erro no server', error })
        }
    },

    subscribe: async (req, res) => {
        const eventId = Number(req.params.id);
        const userId = req.user.id

        if (!eventId || isNaN(eventId)) {
            return res.status(400).json({ message: 'ID invalido' })
        }

        try {
            const subscribeparticipant = await EventsServices.subscribe(userId, eventId);
            return res.status(201).json({ message: 'inscrição realizada' });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'erro no server' });
        }
    }


}

