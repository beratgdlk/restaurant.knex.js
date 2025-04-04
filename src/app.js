import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import categoryRoutes from './routes/routes.category.js';
import productRoutes from './routes/routes.product.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

// Test endpoint'i
app.get('/', (req, res) => {
  res.json({ 
    message: 'Restaurant API çalışıyor!',
    endpoints: {
      categories: {
        base: '/api/categories',
        filters: {
          showDeleted: 'true | false | onlyDeleted'
        }
      },
      products: {
        base: '/api/products',
        filters: {
          category: 'kategori id',
          showDeleted: 'true | false | onlyDeleted'
        }
      }
    }
  });
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
}); 