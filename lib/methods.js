Meteor.methods({
  'userChoose.insert'(userChoose) {
    Meal.insert(userChoose);
  },
});
