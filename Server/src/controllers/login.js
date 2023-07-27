const { User } = require("../DB_connection");

const login = async (req, res) => {
  try {
    const { email, password } = req.query;

    const missingData = "Missing data";
    !email || !password && res.status(400).send(missingData);

    const user = await User.findOne({
        where:{ 
            email,
        }
    })
    !user && res.status(404).send('User not found'); 
    
    return user.password === password ? 
    res.status(200).json({access: true}) :
    res.status(403).send('Invalid passowrd');

  } catch (error) {
    res.status(500).json({error: error.message})
  }
};

module.exports = {
  login,
};
