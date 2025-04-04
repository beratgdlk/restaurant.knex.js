export async function up(knex) {
  return knex.schema.createTable('product_ingredients', function(table) {
    table.increments('id').primary();
    table.integer('product_id').unsigned().notNullable().references('id').inTable('products').onDelete('CASCADE');
    table.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredients').onDelete('CASCADE');

    // Composite unique key
    table.unique(['product_id', 'ingredient_id']);
  });
}

export async function down(knex) {
  return knex.schema.dropTable('product_ingredients');
}
