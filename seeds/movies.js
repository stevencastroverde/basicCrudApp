
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie').del()
    .then(function () {
      const movies = [{
        title: 'Miss Sloane',
        dateReleased : '2016-12-08'
      },
      {
        title: 'La La Land',
        dateReleased : '2016-12-16'
      },
      {
        title: 'Fantastic Beasts and Where to Find Them',
        dateReleased : '2016-11-18'
      },
      {
        title: 'Sausage Party',
        dateReleased : '2016-08-12'
      },

];
 return knex('movie').insert(movies);
});
};
