const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {

    try {
        const {id, name, origin, status, species, image, gender} = req.body; 
        console.log(id, name, origin, status, species, image, gender);
        const missingData = 'Missing data';
    
        !id || !name || !origin || !status || !species || !image || !gender 
        && 
        res.status(401).send(missingData); 
    
        await Favorite.findOrCreate({
            where: {
                id,
                name, 
                origin, 
                status, 
                species, 
                image, 
                gender,
            }
        });

        const allFav = await Favorite.findAll();
        return res.status(200).json(allFav);


    } catch (error) {
        res.status(500).json({error: error.message}); 
    }
   

}



module.exports={
    postFav,
}