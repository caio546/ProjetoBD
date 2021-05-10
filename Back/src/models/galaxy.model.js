const db = require("../config/database");

exports.create = async ({Nome, Formato, Localizacao}) => {
  const response = await db.query(
    "INSERT INTO galaxia (Nome, Formato, Localizacao) VALUES ($1, $2, $3)",
    [Nome, Formato, Localizacao]
  );

  return response;
}

exports.findAll = async () => {
  const response = await db.query('SELECT * FROM galaxia ORDER BY Nome ASC');
  return response;
}

exports.findById = async (id) => {
  const response = await db.query('SELECT * FROM galaxia WHERE Galaxia_ID = $1', [id]);
  return response;
}

exports.update = async ({Nome, Formato, Localizacao, galaxyId}) => {
  const response = await db.query(
    "UPDATE galaxia SET Nome = $1, Formato = $2, Localizacao = $3 WHERE Galaxia_ID = $4",
    [Nome, Formato, Localizacao, galaxyId]
  );

  return response;
}

exports.delete = async (id) => {
  const response = await db.query('DELETE FROM galaxia WHERE Galaxia_ID = $1', [
    id
  ]);

  return response;
}
