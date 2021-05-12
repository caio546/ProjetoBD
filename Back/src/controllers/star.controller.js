const starModel = require("../models/star.model");

exports.createStar = async (req, res) => {
  const { Nome, Cor, Luminosidade, Temperatura, Sistema_ID } = req.body;

  await starModel.create({ Nome, Cor, Luminosidade, Temperatura, Sistema_ID });

  res.status(201).send({
    message: "Star added successfully!",
    body: {
      star: { Nome, Cor, Luminosidade, Temperatura, Sistema_ID }
    },
  });
};

exports.listAllStars= async (req, res) => {
  const response = await starModel.findAll();
  res.status(200).send(response.rows);
};

exports.findStarById = async (req, res) => {
  const starId = parseInt(req.params.id);
  const response = await starModel.findById(starId);
  res.status(200).send(response.rows);
}

exports.updateStarById = async (req, res) => {
  const starId = parseInt(req.params.id);
  const { Nome, Cor, Luminosidade, Temperatura, Sistema_ID } = req.body;
  await starModel.update({ Nome, Cor, Luminosidade, Temperatura, Sistema_ID, starId });
  res.status(200).send({ message: "Star Updated Successfully!" });
};

exports.deleteStarById = async (req, res) => {
  const starId = parseInt(req.params.id);

  await starModel.delete(starId);

  res.status(200).send({ message: 'Star deleted successfully!', starId });
};
