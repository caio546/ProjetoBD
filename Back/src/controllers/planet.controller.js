const planetModel = require("../models/planet.model");

exports.createPlanet = async (req, res) => {
  const { Nome, Localizacao, Diametro, Material, Gravidade, Tipo, Idade, Sistema_ID } = req.body;

  await planetModel.create({ Nome, Localizacao, Diametro, Material, Gravidade, Tipo, Idade, Sistema_ID });

  res.status(201).send({
    message: "Planet added successfully!",
    body: {
      planet: { Nome, Localizacao, Diametro, Material, Gravidade, Tipo, Idade, Sistema_ID }
    },
  });
};

exports.listAllPlanets = async (req, res) => {
  const response = await planetModel.findAll();
  res.status(200).send(response.rows);
};

exports.findPlanetById = async (req, res) => {
  const planetId = parseInt(req.params.id);
  const response = await planetModel.findById(planetId);
  res.status(200).send(response.rows);
}

exports.updatePlanetById = async (req, res) => {
  const planetId = parseInt(req.params.id);
  const { Nome, Localizacao, Diametro, Material, Gravidade, Tipo, Idade, Sistema_ID } = req.body;
  await planetModel.update({ Nome, Localizacao, Diametro, Material, Gravidade, Tipo, Idade, Sistema_ID, planetId });
  res.status(200).send({ message: "Planet Updated Successfully!" });
};

exports.deletePlanetById = async (req, res) => {
  const planetId = parseInt(req.params.id);

  await planetModel.delete(planetId);

  res.status(200).send({ message: 'Planet deleted successfully!', planetId });
};
