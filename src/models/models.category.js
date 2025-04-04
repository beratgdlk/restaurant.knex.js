import db from '../config/database.js';

class Category {
  static tableName = 'categories';

  static async getAll() {
    return db(this.tableName)
      .whereNull('deleted_at')
      .select('*');
  }

  static async getById(id) {
    return db(this.tableName)
      .where({ id })
      .whereNull('deleted_at')
      .first();
  }

  static async create(data) {
    return db(this.tableName)
      .insert(data)
      .returning('*');
  }

  static async update(id, data) {
    data.updated_at = db.fn.now();
    return db(this.tableName)
      .where({ id })
      .whereNull('deleted_at')
      .update(data)
      .returning('*');
  }

  static async delete(id) {
    return db(this.tableName)
      .where({ id })
      .update({
        deleted_at: db.fn.now()
      });
  }
}

export default Category; 