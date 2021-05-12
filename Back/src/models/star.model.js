const db = require("../config/database");

exports.create = async ({ Nome, Cor, Luminosidade, Temperatura, Sistema_ID }) => {
  const response = await db.query(
    "INSERT INTO Estrela(Nome, Cor, Luminosidade, Temperatura, Sistema_ID) VALUES ($1, $2, $3, $4, $5)",
    [Nome, Cor, Luminosidade, Temperatura, Sistema_ID]
  );

  return response;
}

exports.findAll = async () => {
  const response = await db.query('SELECT * FROM Estrela ORDER BY Estrela_ID ASC');
  return response;
}

exports.findById = async (id) => {
  const response = await db.query('SELECT * FROM Estrela WHERE Estrela_ID = $1', [id]);
  return response;
}

exports.update = async ({ Nome, Cor, Luminosidade, Temperatura, Sistema_ID, starId }) => {
  const response = await db.query(
    "UPDATE Estrela SET Nome = $1, Cor = $2, Luminosidade = $3, Temperatura = $4, Sistema_ID = $5 WHERE Estrela_ID = $6",
    [Nome, Cor, Luminosidade, Temperatura, Sistema_ID, starId]
  );

  return response;
}

exports.delete = async (id) => {
  const response = await db.query('DELETE FROM Estrela WHERE Estrela_ID = $1', [
    id
  ]);

  return response;
}
