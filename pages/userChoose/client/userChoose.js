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
    Meal.insert({name,day,owner:Meteor.userId(),createAT:new Date()});
    //People.insert({name,birthyear})
  }
})

Template.mealrow.events({
    'click span'(elt,instance) {
      console.dir(this);
      console.log(this);
      console.log(this.meal._id);
      Meal.remove(this.meal._id);
    }
})

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
