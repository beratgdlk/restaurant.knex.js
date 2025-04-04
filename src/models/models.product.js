import knex from '../config/database.js';

class Product {
  static async getAll(category = null, showDeleted = false) {
    let query = knex('products');

    if (category) {
      query = query.where('category_id', category);
    }

    if (showDeleted === 'true') {
      query = query.withDeleted();
    } else if (showDeleted === 'onlyDeleted') {
      query = query.onlyDeleted();
    }

    return await query;
  }

  static async getById(id) {
    return await knex('products').where('id', id).first();
  }

  static async getByCategory(categoryId) {
    return await knex('products').where('category_id', categoryId);
  }

  static async create(data) {
    try {
      // PostgreSQL için returning kullanımı
      const rows = await knex('products')
        .insert({
          name: data.name,
          description: data.description,
          price: data.price,
          category_id: data.category_id,
          created_at: new Date(),
          updated_at: new Date()
        })
        .returning('*');
      
      return rows[0]; // Direkt olarak eklenen kaydı dönüyoruz
    } catch (error) {
      console.error('Create product error:', error);
      throw error;
    }
  }

  static async update(id, data) {
    await knex('products').where('id', id).update(data);
    return await this.getById(id);
  }

  static async softDelete(id) {
    await knex('products').where('id', id).update({ deleted_at: new Date() });
    return await this.getById(id);
  }

  static async restore(id) {
    await knex('products').where('id', id).update({ deleted_at: null });
    return await this.getById(id);
  }

  static async hardDelete(id) {
    return await knex('products').where('id', id).del();
  }
}

export default Product; 