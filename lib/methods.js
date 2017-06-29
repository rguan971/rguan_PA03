Meteor.methods({
  'userChoose.insert'(userChoose) {
    Meal.insert(userChoose);
  },

  'userChoose.remove'(userChoose) {
    if (this.userId == userChoose.owner) {
      Meal.remove(userChoose._id);
    } else {
      alert("Why are you deleting someone else's entry?");
    }

  /*  if (this.meal.owner==Meteor.userId()){
      Meal.remove(this.meal._id);
    } else {
      alert("Why are you deleting someone else's entry?");
    } */

  },

});
