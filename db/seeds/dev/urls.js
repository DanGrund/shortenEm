exports.seed = function(knex, Promise) {
  return knex('urls').del()
  .then(() => {
    return Promise.all([
      knex('urls').insert({
        id: 1,
        shortURL: "google.com",
        longURL: "google.com",
        visitCount: 1,
        folder_id: 1
      }),
      knex('urls').insert({
        id: 2,
        shortURL: "reddit.com/",
        longURL: "reddit.com",
        visitCount: 2,
        folder_id: 1
      }),
      knex('urls').insert({
        id: 3,
        shortURL: "wham.com/",
        longURL: "wham.com/",
        visitCount: 1,
        folder_id: 2
      })
    ]);
  });
};
