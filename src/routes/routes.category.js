import express from 'express';
import categoryController from '../controllers/controllers.category.js';

const router = express.Router();

// Tüm kategorileri listele (filtreleme destekli)
router.get('/', categoryController.getAll);

// ID'ye göre kategori getir
router.get('/:id', categoryController.getById);

// Yeni kategori oluştur
router.post('/', categoryController.create);

// Kategori güncelle
router.put('/:id', categoryController.update);

// Kategori sil (soft delete)
router.delete('/:id', categoryController.delete);

// Silinmiş kategoriyi geri getir
router.post('/:id/restore', categoryController.restore);

// Kategoriyi kalıcı olarak sil
router.delete('/:id/hard', categoryController.hardDelete);

export default router; 