const axios = require("axios");

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then(({ image, status, origin, name, species, gender }) => {
      const char = {
        id,
        image,
        status,
        origin: origin.name,
        name,
        species,
        gender,
      };
      return res
        .writeHead(200, { "Content-type": "application/json" })
        .end(JSON.stringify(char));
    })
    .catch((error) =>
      res
        .writeHead(500, { "Content-type": "text/plain" })
        .end("Error: " + error.message)
    );
};

module.exports = {
  getCharById,
};
