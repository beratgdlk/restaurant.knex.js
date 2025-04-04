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
    const [id] = await knex('categories').insert(data);
    return await this.getById(id);
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