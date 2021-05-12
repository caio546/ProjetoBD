const db = require("../config/database");

exports.create = async ({ Nome, Tipo, Massa, Tamanho, Galaxia_ID }) => {
  const response = await db.query(
    "INSERT INTO SistemaPlanetario(Nome, Tipo, Massa, Tamanho, Galaxia_ID) VALUES ($1, $2, $3, $4, $5)",
    [Nome, Tipo, Massa, Tamanho, Galaxia_ID]
  );

  return response;
}

exports.findAll = async () => {
  const response = await db.query('SELECT * FROM SistemaPlanetario ORDER BY Sistema_ID ASC');
  return response;
}

exports.findById = async (id) => {
  const response = await db.query('SELECT * FROM SistemaPlanetario WHERE Sistema_ID = $1', [id]);
  return response;
}

exports.update = async ({ Nome, Tipo, Massa, Tamanho, Galaxia_ID, systemId }) => {
  const response = await db.query(
    "UPDATE SistemaPlanetario SET Nome = $1, Tipo = $2, Massa = $3, Tamanho = $4, Galaxia_ID = $5 WHERE Sistema_ID = $6",
    [Nome, Tipo, Massa, Tamanho, Galaxia_ID, systemId]
  );

  return response;
}

exports.delete = async (id) => {
  const response = await db.query('DELETE FROM SistemaPlanetario WHERE Sistema_ID = $1', [
    id
  ]);

  return response;
}
