const db = require("../config/database");

exports.createGalaxy = async (req, res) => {
  const { Nome, Formato, Localizacao } = req.body;

  const { rows } = await db.query(
    "INSERT INTO galaxia (Nome, Formato, Localizacao) VALUES ($1, $2, $3)",
    [Nome, Formato, Localizacao]
  );

  res.status(201).send({
    message: "Galaxy added successfully!",
    body: {
      galaxy: { Nome, Formato, Localizacao }
    },
  });
};

exports.listAllGalaxies = async (req, res) => {
  const response = await db.query('SELECT * FROM galaxia ORDER BY Nome ASC');
  res.status(200).send(response.rows);
};

exports.findGalaxyById = async (req, res) => {
  const galaxyId = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM galaxia WHERE Galaxia_ID = $1', [galaxyId]);
  res.status(200).send(response.rows);
}

exports.updateGalaxyById = async (req, res) => {
  const galaxyId = parseInt(req.params.id);
  const { Nome, Formato, Localizacao } = req.body;
  const response = await db.query(
    "UPDATE galaxia SET Nome = $1, Formato = $2, Localizacao = $3 WHERE Galaxia_ID = $4",
    [Nome, Formato, Localizacao, galaxyId]
  );
  res.status(200).send({ message: "Galaxy Updated Successfully!" });
};

exports.deleteGalaxyById = async (req, res) => {
  const galaxyId = parseInt(req.params.id);

  await db.query('DELETE FROM galaxia WHERE Galaxia_ID = $1', [
    galaxyId
  ]);

  res.status(200).send({ message: 'Galaxy deleted successfully!', galaxyId });
};
