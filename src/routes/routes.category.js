import { Router } from 'express';
import categoryController from '../controllers/controllers.category.js';

const router = Router();

router.get('/', categoryController.getAll);
router.get('/:id', categoryController.getById);
router.post('/', categoryController.create);
router.patch('/:id', categoryController.update);
router.delete('/:id', categoryController.delete);

router.get('/deleted/all', categoryController.getDeleted);
router.post('/:id/restore', categoryController.restore);
router.delete('/:id/hard', categoryController.hardDelete);

export default router; 