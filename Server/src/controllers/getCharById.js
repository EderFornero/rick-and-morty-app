const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);

    if (!data.name) throw new Error(`Character: ${id} Not found`);

    if (data.name) {
      const char = {
        id: data.id,
        name: data.name,
        status: data.status,
        species: data.species,
        origin: data.origin,
        gender: data.gender,
        image: data.image,
      };
      return res.status(200).json(char);
    }
  } catch (error) {
    return error.message.includes('Character:') 
    ? res.status(404).send(error.message)
    : res.status(500).send(error.message);
  }
};

module.exports = {
  getCharById,
};
