import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import categoryRoutes from './routes/routes.category.js';
import productRoutes from './routes/routes.product.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
}); 