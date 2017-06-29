Template.showMeal.helpers({
  meallist() {return Meal.find()},
})

Template.addMeal.events({
  'click button'(elt,instance) {
    const name = instance.$('#name').val();
    const day = instance.$('#day').val();
    //const mealday = parseInt(day);
    console.log('adding '+name);
    instance.$('#name').val("");
    instance.$('#day').val("");

    var userChoose = {name,day,
                owner:Meteor.userId(),
                createAt:new Date()};
    Meteor.call('userChoose.insert',userChoose,
      (err,res) => {
        console.log('got the answer');
        console.dir([err,res]);
        }
    );
    //Meal.insert(chore);
  }
})

Template.mealrow.helpers({
  isOwner() {console.dir(this);
     return this.meal.owner == Meteor.userId()}
})

Template.mealrow.events({
    'click span'(elt,instance) {
      console.dir(this);
      console.log(this);
      console.log(this.meal._id);
      Meteor.call('userChoose.remove', this.meal);
      /*if (this.meal.owner==Meteor.userId()){
        Meal.remove(this.meal._id);
      } else {
        alert("Why are you deleting someone else's entry?");
      }*/
    }
})

/*
Template.userChoose.helpers({
  meallines: function(){
    // return the last five chats
    // sorted by when they were created (most recent, first)
    return Meal.find({},
                      {limit:5,
                        sort: {createdAt: -1}})},

  'users': function () {

    return Meteor.users.find();
  },
  'connections': function(){
    return Connections.find();
  },
  'connect': function() {
    console.log("finding connections!");
    const z = Connections.find();
    zz = Meteor.call("getInfo",[]);
    console.log("myIP= "+zz);

    console.log("**** connections = "+JSON.stringify(z.fetch()));
    return z;
  }
});

Template.userChoose.events({
  'click .add-me-js': function(){
    console.log("clicked!");
    Meteor.call("getInfo");
  },

  'click .js-remove-all': function(event){
    console.log("removing...");
    Meteor.call("removeAll");
  },

  "click .js-chatsubmit": function(event){
    event.preventDefault();
    console.log("the button was clicked")
    const theText = $(".js-chatinput").val();  // read the user's chat text ...
    const chatline = {text:theText, createdAt:new Date(), createdBy:Meteor.userId()};
    Chats.insert(chatline);
  },
})
*/
