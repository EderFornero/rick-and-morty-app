const {User} = require('../DB_connection'); 


const postUser = async (req, res) => {
    try {
        const {email, password} = req.body; 
        const missingData = 'Missing data';

        !email || !password && res.status(400).send(missingData); 

        const user = await User.findOrCreate({
            where: {
                email,
                password,
            }
        }); 

        res.status(200).json(user);

    } catch (error) {
        res.status(500).send({error: error.message}); 
    }
   
}


module.exports= {
    postUser,
}