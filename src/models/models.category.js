import knex from '../config/database.js';

class Category {
  static async getAll(showDeleted = false) {
    let query = knex('categories');

    if (showDeleted === 'true') {
      query = query.withDeleted();
    } else if (showDeleted === 'onlyDeleted') {
      query = query.onlyDeleted();
    }

    return await query;
  }

  static async getById(id) {
    return await knex('categories').where('id', id).first();
  }

  static async create(data) {
    try {
      // PostgreSQL için returning kullanımı
      const rows = await knex('categories')
        .insert({
          name: data.name,
          description: data.description,
          created_at: new Date(),
          updated_at: new Date()
        })
        .returning('*');
      
      return rows[0]; // Direkt olarak eklenen kaydı dönüyoruz
    } catch (error) {
      console.error('Create category error:', error);
      throw error;
    }
  }

  static async update(id, data) {
    await knex('categories').where('id', id).update(data);
    return await this.getById(id);
  }

  static async softDelete(id) {
    await knex('categories').where('id', id).update({ deleted_at: new Date() });
    return await this.getById(id);
  }

  static async restore(id) {
    await knex('categories').where('id', id).update({ deleted_at: null });
    return await this.getById(id);
  }

  static async hardDelete(id) {
    return await knex('categories').where('id', id).del();
  }
}

export default Category; 