const router = require('express-promise-router')();
const planetController = require('../controllers/planet.controller');
// ==> Definindo as rotas do CRUD - 'planet':
// ==> Rota responsável por criar um novo 'planet': (POST): localhost:3000/api/planets
// Create
router.post('/planets', planetController.createPlanet);
// Read
router.get('/planets', planetController.listAllPlanets);
router.get('/planets/:id', planetController.findPlanetById);
// Update
router.put('/planets/:id', planetController.updatePlanetById);
// Delete
router.delete('/planets/:id', planetController.deletePlanetById);
module.exports = router;
