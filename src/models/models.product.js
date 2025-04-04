import db from '../db/db.js';

class Product {
  static tableName = 'products';

  static async getAll(showDeleted = false, onlyDeleted = false, categoryId = null) {
    const query = db(this.tableName);

    if (onlyDeleted) {
      query.whereNotNull('deleted_at');
    } else if (!showDeleted) {
      query.whereNull('deleted_at');
    }

    if (categoryId) {
      query.where('category_id', categoryId);
    }

    return await query.select('*');
  }

  static async getById(id) {
    return await db(this.tableName)
      .where({ id })
      .whereNull('deleted_at')
      .first();
  }

  static async create(data) {
    const [product] = await db(this.tableName)
      .insert({
        ...data,
        created_at: new Date(),
        updated_at: new Date()
      })
      .returning('*');
    
    return product;
  }

  static async update(id, data) {
    const [product] = await db(this.tableName)
      .where({ id })
      .whereNull('deleted_at')
      .update({
        ...data,
        updated_at: new Date()
      })
      .returning('*');
    
    return product;
  }

  static async softDelete(id) {
    const [product] = await db(this.tableName)
      .where({ id })
      .whereNull('deleted_at')
      .update({
        deleted_at: new Date(),
        updated_at: new Date()
      })
      .returning('*');
    
    return product;
  }

  static async restore(id) {
    const [product] = await db(this.tableName)
      .where({ id })
      .whereNotNull('deleted_at')
      .update({
        deleted_at: null,
        updated_at: new Date()
      })
      .returning('*');
    
    return product;
  }

  static async getDeleted() {
    return db(this.tableName)
      .whereNotNull('deleted_at')
      .select('*');
  }

  static async hardDelete(id) {
    const [product] = await db(this.tableName)
      .where({ id })
      .del()
      .returning('*');
    
    return product;
  }

  // Kategori bazlı ürün listeleme
  static async getByCategory(categoryId) {
    return db(this.tableName)
      .where({ category_id: categoryId })
      .whereNull('deleted_at')
      .select('*');
  }
}

export default Product; 