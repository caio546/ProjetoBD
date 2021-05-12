const systemModel = require("../models/system.model");

exports.createSystem = async (req, res) => {
  const { Nome, Tipo, Massa, Tamanho, Galaxia_ID } = req.body;

  await systemModel.create({ Nome, Tipo, Massa, Tamanho, Galaxia_ID});

  res.status(201).send({
    message: "System added successfully!",
    body: {
      system: { Nome, Tipo, Massa, Tamanho, Galaxia_ID}
    },
  });
};

exports.listAllSystems = async (req, res) => {
  const response = await systemModel.findAll();
  res.status(200).send(response.rows);
};

exports.findSystemById = async (req, res) => {
  const systemId = parseInt(req.params.id);
  const response = await systemModel.findById(systemId);
  res.status(200).send(response.rows);
}

exports.updateSystemById = async (req, res) => {
  const systemId = parseInt(req.params.id);
  const { Nome, Tipo, Massa, Tamanho, Galaxia_ID } = req.body;
  await systemModel.update({ Nome, Tipo, Massa, Tamanho, Galaxia_ID, systemId });
  res.status(200).send({ message: "System Updated Successfully!" });
};

exports.deleteSystemById = async (req, res) => {
  const systemId = parseInt(req.params.id);

  await systemModel.delete(systemId);

  res.status(200).send({ message: 'System deleted successfully!', systemId });
};
