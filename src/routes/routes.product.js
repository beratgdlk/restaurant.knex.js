import express from 'express';
import productController from '../controllers/controllers.product.js';

const router = express.Router();

// Tüm ürünleri listele (filtreleme destekli)
router.get('/', productController.getAll);

// Kategoriye göre ürünleri getir
router.get('/category/:categoryId', productController.getByCategory);

// ID'ye göre ürün getir
router.get('/:id', productController.getById);

// Yeni ürün oluştur
router.post('/', productController.create);

// Ürün güncelle
router.put('/:id', productController.update);

// Ürün sil (soft delete)
router.delete('/:id', productController.delete);

// Silinmiş ürünü geri getir
router.post('/:id/restore', productController.restore);

// Ürünü kalıcı olarak sil
router.delete('/:id/hard', productController.hardDelete);

export default router; 