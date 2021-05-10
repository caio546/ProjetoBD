const galaxyModel = require("../models/galaxy.model");

exports.createGalaxy = async (req, res) => {
  const { Nome, Formato, Localizacao } = req.body;

  await galaxyModel.create({ Nome, Formato, Localizacao});

  res.status(201).send({
    message: "Galaxy added successfully!",
    body: {
      galaxy: { Nome, Formato, Localizacao }
    },
  });
};

exports.listAllGalaxies = async (req, res) => {
  const response = await galaxyModel.findAll();
  res.status(200).send(response.rows);
};

exports.findGalaxyById = async (req, res) => {
  const galaxyId = parseInt(req.params.id);
  const response = await galaxyModel.findById(galaxyId);
  res.status(200).send(response.rows);
}

exports.updateGalaxyById = async (req, res) => {
  const galaxyId = parseInt(req.params.id);
  const { Nome, Formato, Localizacao } = req.body;
  await galaxyModel.update({Nome, Formato, Localizacao, galaxyId});
  res.status(200).send({ message: "Galaxy Updated Successfully!" });
};

exports.deleteGalaxyById = async (req, res) => {
  const galaxyId = parseInt(req.params.id);

  await galaxyModel.delete(galaxyId);

  res.status(200).send({ message: 'Galaxy deleted successfully!', galaxyId });
};
