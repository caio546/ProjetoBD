const router = require('express-promise-router')();
const systemController = require('../controllers/system.controller');
// ==> Definindo as rotas do CRUD - 'system':
// ==> Rota responsável por criar um novo 'system': (POST): localhost:3000/api/systems
// Create
router.post('/systems', systemController.createSystem);
// Read
router.get('/systems', systemController.listAllSystems);
router.get('/systems/:id', systemController.findSystemById);
// Update
router.put('/systems/:id', systemController.updateSystemById);
// Delete
router.delete('/systems/:id', systemController.deleteSystemById);
module.exports = router;
