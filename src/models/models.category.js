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

  static async softDelete(id) {
    return db(this.tableName)
      .where({ id })
      .whereNull('deleted_at')
      .update({
        deleted_at: db.fn.now(),
        updated_at: db.fn.now()
      })
      .returning('*');
  }

  static async restore(id) {
    return db(this.tableName)
      .where({ id })
      .whereNotNull('deleted_at')
      .update({
        deleted_at: null,
        updated_at: db.fn.now()
      })
      .returning('*');
  }

  static async getDeleted() {
    return db(this.tableName)
      .whereNotNull('deleted_at')
      .select('*');
  }

  // Gerçekten silmek için (hard delete)
  static async hardDelete(id) {
    return db(this.tableName)
      .where({ id })
      .del();
  }
}

export default Category; 