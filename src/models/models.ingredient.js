import db from '../db/db.js';

class Ingredient {
  static async getAll() {
    return await db('ingredients')
      .where('deleted_at', null)
      .select('*');
  }

  static async getDeleted() {
    return await db('ingredients')
      .whereNotNull('deleted_at')
      .select('*');
  }

  static async getById(id) {
    return await db('ingredients')
      .where({ id })
      .where('deleted_at', null)
      .first();
  }

  static async getByProduct(productId) {
    return await db('product_ingredients')
      .join('ingredients', 'product_ingredients.ingredient_id', 'ingredients.id')
      .where('product_ingredients.product_id', productId)
      .where('ingredients.deleted_at', null)
      .select('ingredients.*', 'product_ingredients.amount');
  }

  static async create(data) {
    const [ingredient] = await db('ingredients')
      .insert({
        ...data,
        created_at: new Date(),
        updated_at: new Date()
      })
      .returning('*');
    
    return ingredient;
  }

  static async update(id, data) {
    const [ingredient] = await db('ingredients')
      .where({ id })
      .where('deleted_at', null)
      .update({
        ...data,
        updated_at: new Date()
      })
      .returning('*');
    
    return ingredient;
  }

  static async softDelete(id) {
    const [ingredient] = await db('ingredients')
      .where({ id })
      .where('deleted_at', null)
      .update({
        deleted_at: new Date(),
        updated_at: new Date()
      })
      .returning('*');
    
    return ingredient;
  }

  static async restore(id) {
    const [ingredient] = await db('ingredients')
      .where({ id })
      .whereNotNull('deleted_at')
      .update({
        deleted_at: null,
        updated_at: new Date()
      })
      .returning('*');
    
    return ingredient;
  }

  static async hardDelete(id) {
    const [ingredient] = await db('ingredients')
      .where({ id })
      .del()
      .returning('*');
    
    return ingredient;
  }
}

export default Ingredient; 