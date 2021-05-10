const router = require('express-promise-router')();
const galaxyController = require('../controllers/galaxy.controller');
// ==> Definindo as rotas do CRUD - 'Galaxy':
// ==> Rota responsável por criar um novo 'Galaxy': (POST): localhost:3000/api/galaxies
// Create
router.post('/galaxies', galaxyController.createGalaxy);
// Read
router.get('/galaxies', galaxyController.listAllGalaxies);
router.get('/galaxies/:id', galaxyController.findGalaxyById);
// Update
router.put('/galaxies/:id', galaxyController.updateGalaxyById);
// Delete
router.delete('/galaxies/:id', galaxyController.deleteGalaxyById);
module.exports = router;
