function tameTheDragons(){

//models

var Console = Backbone.Model.extend({
  defaults: {
    color: 'black'
  },
  initialize: function(){
    console.log("new Console model initialized");
    this.on("change:color", function(model){
      var color = model.get("color");
      console.log("Changed the console color to " + color);
    });
  },
  promptColor: function() {
    var cssColor = prompt("Please enter a CSS color:");
    this.set({color: cssColor});
  }
});

var term = new Console;

//faux views

window.terminal = new Console;

terminal.on('change:color', function(model, color) {
  console.log("changing color to "+color);
  jQuery("#console").css({background: color});
})

terminal.set({color: 'pink'});

terminal.promptColor();

}// end tameTheDragons