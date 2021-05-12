const router = require('express-promise-router')();
const starController = require('../controllers/star.controller');
// ==> Definindo as rotas do CRUD - 'star':
// ==> Rota responsável por criar um novo 'star': (POST): localhost:3000/api/stars
// Create
router.post('/stars', starController.createStar);
// Read
router.get('/stars', starController.listAllStars);
router.get('/stars/:id', starController.findStarById);
// Update
router.put('/stars/:id', starController.updateStarById);
// Delete
router.delete('/stars/:id', starController.deleteStarById);
module.exports = router;
