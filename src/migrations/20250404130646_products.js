export async function up(knex) {
  return knex.schema.createTable('products', function(table) {
    table.increments('id').primary();
    table.integer('category_id').unsigned().references('id').inTable('categories');
    table.string('name').notNullable();
    table.text('description');
    table.decimal('price', 10, 2).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').nullable();
    table.timestamp('deleted_at').nullable();
  });
}

export async function down(knex) {
  return knex.schema.dropTable('products');
}
