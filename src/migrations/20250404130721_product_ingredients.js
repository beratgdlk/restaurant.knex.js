export function up(knex) {
  return knex.schema.createTable('product_ingredients', (table) => {
    table.increments('id').primary();
    table.integer('product_id').unsigned().notNullable();
    table.integer('ingredient_id').unsigned().notNullable();
    table.decimal('amount', 10, 2).notNullable();
    table.string('unit').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());

    table.foreign('product_id')
      .references('id')
      .inTable('products')
      .onDelete('CASCADE');

    table.foreign('ingredient_id')
      .references('id')
      .inTable('ingredients')
      .onDelete('CASCADE');

    table.unique(['product_id', 'ingredient_id']);
  });
}

export function down(knex) {
  return knex.schema.dropTable('product_ingredients');
}
