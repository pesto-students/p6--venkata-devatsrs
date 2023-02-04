const jwt = require('jsonwebtoken');
const User = require('../db/models/user');

const authenticate = async (req, res, next) => {
    try {

        //jwt secret 
        const jwtSecret = 'your_secret_key';

        const token = req.header('Authorization').replace('Bearer ', '');
        console.log(token);
        const decoded = jwt.verify(token, jwtSecret);
        console.log(decoded);
        const user = await User.findOne({ _id: decoded.userId  });
         console.log(user);

        if (!user) {
            throw new Error();
        }
        console.log(user);
        req.user = user;
        req.token = token;
        next();
    } catch (err) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
};

module.exports = authenticate;
