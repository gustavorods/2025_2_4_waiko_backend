async function getUsersData(req, res) {
    try {
        // Simulate fetching user data from a database or external service
            const users = [
            { id: 1, nome: 'Alice',  senha: 'alice123',  email: 'alice@email.com',  cpf: '123.456.789-00' },
            { id: 2, nome: 'Bruno',  senha: 'bruno456',  email: 'bruno@email.com',  cpf: '987.654.321-99' },
            { id: 3, nome: 'Carla',  senha: 'carla789',  email: 'carla@email.com',  cpf: '111.222.333-44' },
            { id: 4, nome: 'Diego',  senha: 'diego321',  email: 'diego@email.com',  cpf: '555.666.777-88' },
            { id: 5, nome: 'Elisa',  senha: 'elisa654',  email: 'elisa@email.com',  cpf: '999.888.777-66' }
            ];
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching users data'});
    }
}

module.exports = { getUsersData };