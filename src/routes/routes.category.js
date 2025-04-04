import express from 'express';
import Category from '../models/models.category.js';

const router = express.Router();

// Tüm kategorileri listele (filtreleme destekli)
router.get('/', async (req, res) => {
  try {
    const { showDeleted } = req.query;
    const categories = await Category.getAll(showDeleted);
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ID'ye göre kategori getir
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.getById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: 'Kategori bulunamadı' });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Yeni kategori oluştur
router.post('/', async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json({
      message: 'Kategori başarıyla oluşturuldu',
      category
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Kategori güncelle
router.put('/:id', async (req, res) => {
  try {
    const category = await Category.update(req.params.id, req.body);
    if (!category) {
      return res.status(404).json({ error: 'Kategori bulunamadı' });
    }
    res.json({
      message: 'Kategori başarıyla güncellendi',
      category
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Kategori sil (soft delete)
router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.softDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ error: 'Kategori bulunamadı' });
    }
    res.json({ message: 'Kategori başarıyla silindi' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Silinmiş kategoriyi geri getir
router.post('/:id/restore', async (req, res) => {
  try {
    const category = await Category.restore(req.params.id);
    if (!category) {
      return res.status(404).json({ error: 'Kategori bulunamadı' });
    }
    res.json({ message: 'Kategori başarıyla geri getirildi' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Kategoriyi kalıcı olarak sil
router.delete('/:id/hard', async (req, res) => {
  try {
    const category = await Category.hardDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ error: 'Kategori bulunamadı' });
    }
    res.json({ message: 'Kategori kalıcı olarak silindi' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router; 