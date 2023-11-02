// Importa los módulos necesarios
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController'); // Asegúrate de que el nombre del controlador sea correcto

// Maneja las solicitudes GET para listar comentarios
router.get('/', commentController.comment_list);

// Maneja las solicitudes GET y POST para crear comentarios
router.get('/create', commentController.comment_create_get);
router.post('/create', commentController.comment_create_post);

// Maneja las solicitudes GET para eliminar comentarios por su ID
router.get('/:id/delete', commentController.comment_delete);

// Exporta el router
module.exports = router;
