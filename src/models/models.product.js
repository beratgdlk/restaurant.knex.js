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
    const [id] = await knex('products').insert(data);
    return await this.getById(id);
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