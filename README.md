# Restaurant Management API

A RESTful API for restaurant management built with Node.js, Express, and PostgreSQL using Knex.js as the SQL query builder.

## Features

- **Categories Management**: Create, read, update, and delete menu categories
- **Products Management**: Manage menu items with prices and category associations
- **Soft Delete Support**: Entities can be soft-deleted and restored
- **API Documentation**: Complete Postman collection for testing and documentation

## Table of Contents

- [Installation](#installation)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Postman Collection](#postman-collection)
- [Environment Variables](#environment-variables)
- [Technologies Used](#technologies-used)

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/restaurant.knex.js.git
cd restaurant.knex.js

# Install dependencies
npm install
```

## Database Setup

1. Create a PostgreSQL database named `restaurant_db`
2. Run database migrations to create tables:
```bash
npm run migrate
```

## Running the Application

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The server will start on port 3002 (configurable in .env file).

## API Endpoints

### Categories

- `GET /api/categories` - List all active categories
- `GET /api/categories?showDeleted=true` - List all categories including deleted ones
- `GET /api/categories/:id` - Get category details
- `POST /api/categories` - Create a new category
- `PUT /api/categories/:id` - Update a category
- `DELETE /api/categories/:id` - Soft delete a category
- `POST /api/categories/:id/restore` - Restore a deleted category
- `DELETE /api/categories/:id/hard` - Permanently delete a category

### Products

- `GET /api/products` - List all active products
- `GET /api/products?category=1` - List products by category
- `GET /api/products?showDeleted=true` - List all products including deleted ones
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Soft delete a product
- `POST /api/products/:id/restore` - Restore a deleted product
- `DELETE /api/products/:id/hard` - Permanently delete a product

## Postman Collection

Import the Postman collection and environment from the `postman` folder to test the API:
- `postman/Restaurant_API.postman_collection.json`
- `postman/Restaurant_API.postman_environment.json`

## Environment Variables

Create a `.env` file at the root of the project with the following variables:

```
# Server Settings
PORT=3002
NODE_ENV=development

# PostgreSQL Database Settings
DB_HOST=localhost
DB_PORT=5432
DB_NAME=restaurant_db
DB_USER=postgres
DB_PASSWORD=postgres
```

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **PostgreSQL**: Database
- **Knex.js**: SQL query builder
- **dotenv**: Environment variable management
- **cors**: Cross-Origin Resource Sharing
- **morgan**: HTTP request logger middleware

---

# Restoran Yönetim API'si

Node.js, Express ve PostgreSQL kullanılarak Knex.js SQL sorgu oluşturucu ile geliştirilmiş restoran yönetimi için bir RESTful API.

## Özellikler

- **Kategori Yönetimi**: Menü kategorilerini oluşturma, okuma, güncelleme ve silme
- **Ürün Yönetimi**: Fiyatları ve kategori ilişkileri ile menü öğelerini yönetme
- **Soft Delete Desteği**: Varlıklar geçici olarak silinebilir ve geri getirilebilir
- **API Dokümantasyonu**: Test ve dokümantasyon için eksiksiz Postman koleksiyonu

## İçindekiler

- [Kurulum](#kurulum)
- [Veritabanı Kurulumu](#veritabanı-kurulumu)
- [Uygulamayı Çalıştırma](#uygulamayı-çalıştırma)
- [API Endpoint'leri](#api-endpointleri)
- [Postman Koleksiyonu](#postman-koleksiyonu)
- [Ortam Değişkenleri](#ortam-değişkenleri)
- [Kullanılan Teknolojiler](#kullanılan-teknolojiler)

## Kurulum

```bash
# Depoyu klonlayın
git clone https://github.com/kullaniciadi/restaurant.knex.js.git
cd restaurant.knex.js

# Bağımlılıkları yükleyin
npm install
```

## Veritabanı Kurulumu

1. `restaurant_db` adında bir PostgreSQL veritabanı oluşturun
2. Tabloları oluşturmak için veritabanı migrasyonlarını çalıştırın:
```bash
npm run migrate
```

## Uygulamayı Çalıştırma

```bash
# Otomatik yeniden yükleme ile geliştirme modu
npm run dev

# Üretim modu
npm start
```

Sunucu, 3002 portunda başlayacaktır (`.env` dosyasında yapılandırılabilir).

## API Endpoint'leri

### Kategoriler

- `GET /api/categories` - Tüm aktif kategorileri listele
- `GET /api/categories?showDeleted=true` - Silinmişler dahil tüm kategorileri listele
- `GET /api/categories/:id` - Kategori detaylarını getir
- `POST /api/categories` - Yeni bir kategori oluştur
- `PUT /api/categories/:id` - Bir kategoriyi güncelle
- `DELETE /api/categories/:id` - Bir kategoriyi geçici olarak sil
- `POST /api/categories/:id/restore` - Silinmiş bir kategoriyi geri getir
- `DELETE /api/categories/:id/hard` - Bir kategoriyi kalıcı olarak sil

### Ürünler

- `GET /api/products` - Tüm aktif ürünleri listele
- `GET /api/products?category=1` - Kategoriye göre ürünleri listele
- `GET /api/products?showDeleted=true` - Silinmişler dahil tüm ürünleri listele
- `GET /api/products/:id` - Ürün detaylarını getir
- `POST /api/products` - Yeni bir ürün oluştur
- `PUT /api/products/:id` - Bir ürünü güncelle
- `DELETE /api/products/:id` - Bir ürünü geçici olarak sil
- `POST /api/products/:id/restore` - Silinmiş bir ürünü geri getir
- `DELETE /api/products/:id/hard` - Bir ürünü kalıcı olarak sil

## Postman Koleksiyonu

API'yi test etmek için `postman` klasöründen Postman koleksiyonunu ve ortamını içe aktarın:
- `postman/Restaurant_API.postman_collection.json`
- `postman/Restaurant_API.postman_environment.json`

## Ortam Değişkenleri

Projenin kök dizininde aşağıdaki değişkenlerle bir `.env` dosyası oluşturun:

```
# Sunucu Ayarları
PORT=3002
NODE_ENV=development

# PostgreSQL Veritabanı Ayarları
DB_HOST=localhost
DB_PORT=5432
DB_NAME=restaurant_db
DB_USER=postgres
DB_PASSWORD=postgres
```

## Kullanılan Teknolojiler

- **Node.js**: JavaScript çalışma ortamı
- **Express.js**: Web çerçevesi
- **PostgreSQL**: Veritabanı
- **Knex.js**: SQL sorgu oluşturucu
- **dotenv**: Ortam değişkeni yönetimi
- **cors**: Cross-Origin Resource Sharing
- **morgan**: HTTP istek günlükleme ara yazılımı

## Proje Yapısı

- `knexfile.js`: Knex.js yapılandırma dosyası
- `src/`: Kaynak kodlar
- `migrations/`: Veritabanı migration dosyaları
- `seeds/`: Veritabanı seed dosyaları 