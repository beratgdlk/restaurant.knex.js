export function up(knex) {
  return knex.schema.createTable('ingredients', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.text('description');
    table.decimal('unit_price', 10, 2).notNullable();
    table.string('unit').notNullable();
    table.integer('stock_quantity').notNullable().defaultTo(0);
    table.integer('minimum_stock').notNullable().defaultTo(0);
    table.string('supplier');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at').nullable();
  });
}

export function down(knex) {
  return knex.schema.dropTable('ingredients');
}
