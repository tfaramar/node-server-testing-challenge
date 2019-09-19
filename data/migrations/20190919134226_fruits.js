
exports.up = function(knex, Promise) {
    return knex.schema.createTable('fruits', tbl => {
        tbl.increments();

        tbl.string('name', 255)
            .unique()
            .notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('fruits');
};
