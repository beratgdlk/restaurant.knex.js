import db from '../db/db.js';

class Category {
  static tableName = 'categories';

  static async getAll(showDeleted = false, onlyDeleted = false) {
    const query = db(this.tableName);

    if (onlyDeleted) {
      query.whereNotNull('deleted_at');
    } else if (!showDeleted) {
      query.whereNull('deleted_at');
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
    const [category] = await db(this.tableName)
      .insert({
        ...data,
        created_at: new Date(),
        updated_at: new Date()
      })
      .returning('*');
    
    return category;
  }

  static async update(id, data) {
    const [category] = await db(this.tableName)
      .where({ id })
      .whereNull('deleted_at')
      .update({
        ...data,
        updated_at: new Date()
      })
      .returning('*');
    
    return category;
  }

  static async softDelete(id) {
    const [category] = await db(this.tableName)
      .where({ id })
      .whereNull('deleted_at')
      .update({
        deleted_at: new Date(),
        updated_at: new Date()
      })
      .returning('*');
    
    return category;
  }

  static async restore(id) {
    const [category] = await db(this.tableName)
      .where({ id })
      .whereNotNull('deleted_at')
      .update({
        deleted_at: null,
        updated_at: new Date()
      })
      .returning('*');
    
    return category;
  }

  static async getDeleted() {
    return db(this.tableName)
      .whereNotNull('deleted_at')
      .select('*');
  }

  // Gerçekten silmek için (hard delete)
  static async hardDelete(id) {
    const [category] = await db(this.tableName)
      .where({ id })
      .del()
      .returning('*');
    
    return category;
  }
}

export default Category; 