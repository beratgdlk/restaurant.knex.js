import dotenv from 'dotenv';
import express from 'express';
import categoryRoutes from './routes/routes.category.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/categories', categoryRoutes);

// Test endpoint'i
app.get('/', (req, res) => {
  res.json({ message: 'Restaurant API çalışıyor!' });
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
}); 