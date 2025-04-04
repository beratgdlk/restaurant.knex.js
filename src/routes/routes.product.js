const express = require('express');
const router = express.Router();
const Product = require('../models/models.product');

// Tüm ürünleri listele (filtreleme destekli)
router.get('/', async (req, res) => {
  try {
    const { category, showDeleted } = req.query;
    const products = await Product.getAll(category, showDeleted);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Kategoriye göre ürünleri getir
router.get('/category/:categoryId', async (req, res) => {
  try {
    const products = await Product.getByCategory(req.params.categoryId);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ID'ye göre ürün getir
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.getById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Ürün bulunamadı' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Yeni ürün oluştur
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      message: 'Ürün başarıyla oluşturuldu',
      product
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ürün güncelle
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.update(req.params.id, req.body);
    if (!product) {
      return res.status(404).json({ error: 'Ürün bulunamadı' });
    }
    res.json({
      message: 'Ürün başarıyla güncellendi',
      product
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ürün sil (soft delete)
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.softDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Ürün bulunamadı' });
    }
    res.json({ message: 'Ürün başarıyla silindi' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Silinmiş ürünü geri getir
router.post('/:id/restore', async (req, res) => {
  try {
    const product = await Product.restore(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Ürün bulunamadı' });
    }
    res.json({ message: 'Ürün başarıyla geri getirildi' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ürünü kalıcı olarak sil
router.delete('/:id/hard', async (req, res) => {
  try {
    const product = await Product.hardDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Ürün bulunamadı' });
    }
    res.json({ message: 'Ürün kalıcı olarak silindi' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 