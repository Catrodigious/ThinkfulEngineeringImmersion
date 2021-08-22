const knex = require("../db/connection");

function list() {
  return knex('comments').select('*');
}

function listCommenterCount() {
  return knex('comments as c')
    .join('users as u', 'u.user_id', 'c.commenter_id')
    .count('*')
    .select('u.user_email as commenter_email')
    .groupBy('u.user_email')
    .orderBy('u.user_email')
}

function read(commentId) {
  // your solution here
}

module.exports = {
  list,
  listCommenterCount,
  read,
};
