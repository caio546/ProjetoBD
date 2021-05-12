const db = require("../config/database");

exports.create = async ({ Nome, Localizacao, Diametro, Material, Gravidade, Tipo, Idade, Sistema_ID }) => {
  const response = await db.query(
    "INSERT INTO Planeta(Nome, Localizacao, Diametro, Material, Gravidade, Tipo, Idade, Sistema_ID) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    [Nome, Localizacao, Diametro, Material, Gravidade, Tipo, Idade, Sistema_ID]
  );

  return response;
}

exports.findAll = async () => {
  const response = await db.query('SELECT * FROM Planeta ORDER BY Planeta_ID ASC');
  return response;
}

exports.findById = async (id) => {
  const response = await db.query('SELECT * FROM Planeta WHERE Planeta_ID = $1', [id]);
  return response;
}

exports.update = async ({ Nome, Localizacao, Diametro, Material, Gravidade, Tipo, Idade, Sistema_ID, planetId }) => {
  const response = await db.query(
    "UPDATE Planeta SET Nome = $1, Localizacao = $2, Diametro = $3, Material = $4, Gravidade = $5, Tipo = $6, Idade = $7, Sistema_ID = $8 WHERE Planeta_ID = $9",
    [Nome, Localizacao, Diametro, Material, Gravidade, Tipo, Idade, Sistema_ID, planetId]
  );

  return response;
}

exports.delete = async (id) => {
  const response = await db.query('DELETE FROM Planeta WHERE Planeta_ID = $1', [
    id
  ]);

  return response;
}
