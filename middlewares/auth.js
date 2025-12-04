require('dotenv').config();

// This function verify the auth key
function checkApiKey(req, res, next) {
    const apiKey = req.headers['x-api-key'];
    if(!apiKey || apiKey !== process.env.AUTH_KEY) {
        return res.status(403).json({error: `Forbiden: Invalid API key`})
    }
    next();
}

module.exports = {checkApiKey}