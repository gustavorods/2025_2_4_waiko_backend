async function getUsersData(req, res) {
    try {
        // Simulate fetching user data from a database or external service
        const users = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
            { id: 3, name: 'Charlie' }
        ];
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching users data'});
    }
}

module.exports = { getUsersData };