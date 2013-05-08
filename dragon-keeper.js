function tameTheDragons(){

//ASCII Art

var asciiCredits = ["/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\",
"\\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/",
"     All ASCII Art was found on <a href='chris.com'>Chris.com</a>",
"     An amazing site that has been online",
"     since 1994!",
"     (You should check out his gallery",
"     of ASCII artwork and donate to him!)",
"     Credit for individual ASCII artworks:",
"     >Pattern above and below this section",
"     is from 'Krogg',",
"     >'Baby' dragon is from 'orca',",
"     >'Full Grown' dragon is from 'dk (c) 1993',",
"     >Dragon style menu border is from ",
"     'Jeff Ferris' and is similar to patterns by", 
"     'Brian Young' and 'Alan Greep'.",
"     >Other art sources unknown.",
"",
"     Thanks to Chris of Chris.com for saving it all!",
"",
"     (press enter to continue)",
"",
"/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\",
"\\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/"]
//OO JS classes
function Player(name, element, scales, dragon){
  this.name = name;
  this.element = element;
  this.scales = scales;
  this.dragon = dragon;
}

function Menu(menuName, opts){
  this.menuName = menuName;
  this.opts = opts;
  this.length = function(){
    return this.opts.length;
  };
  this.setTitle = function(nextTitle){
    this.menuName = nextTitle;
  };
  this.addOption = function(title, number, action){
    this.opts.push({"title":title, "number":number, "action":action})
  };
  this.clearOptions = function(){
    this.opts = [];
  };
  this.display = function(){
    var menuText = ''
    var inner_width = 53;
    var horiz_border = "<pre>                                  /   \\       </pre><pre> _                        )      ((   ))     (</pre><pre>(@)                      /|\\      ))_((     /|\\ </pre><pre>|-|                     / | \\    (/\\|/\\)   / | \\                      (@)</pre><pre>| | -------------------/--|-voV---\\`|'/--Vov-|--\\---------------------|-|</pre><pre>|-|                         '^`   (o o)  '^`                          | |</pre><pre>| |                               `\\Y/'                               |-|</pre><pre>|-|                                                                   | |</pre>"
    var pad_titles = function(title, length){
      if(title.length < length){
        var times = length-title.length;
        for(var i=0;i<times;i++){
          title += ' ';
        }
      }
      return title;
    };
    menuText += horiz_border;
    menuText += '<pre>|-|         '+pad_titles(menuName, inner_width) +'     | |</pre>';
    menuText += '<pre>| |         '+pad_titles(" ", inner_width)+'     |-|</pre>';
    var toggle = false;
    for (var i=0;i<this.length();i++){
      var option = this.opts[i];
      var left = (toggle) ? "|-|" : '| |';
      var right = (toggle) ? "|-|" : '| |';
      menuText += '<pre>'+left+'      '+option.number+'> '+pad_titles(option.title, inner_width)+'     '+right+'</pre>';
      toggle = !toggle;
    };
    menuText += '<pre>| |         '+pad_titles(' ', inner_width)+'     | |</pre>';
    menuText += "<pre>|_|___________________________________________________________________| |</pre><pre>(@)              l   /\\ /         ( (       \\ /\\   l                `\\|-|</pre><pre>                 l /   V           \\ \\       V   \\ l                  (@)</pre><pre>                 l/                _) )_          \\I</pre><pre>                                   `\\ /</pre><pre>                                   ` \\'</pre>"

    return menuText
  };//end this.display
  this.getChoice = function(choice){
    for (var z=0;z<this.length();z++){
      var compare = this.opts[z];
      if(String(choice) == String(compare.number)){
        //execute it's action
        compare.action();
        return;
      }
      else if (z+1 == this.length()){
        return false;
      }
    }
  };//end this.getChoice
}//end menu class

//Backbone models

var Console = Backbone.Model.extend({
  defaults: {
    output: "~Welcome to Dragon Keeper~",
    menu: false
  },
  initialize: function(){
    this.on("change:output", function(model){
      var currOutput = model.get("output");
    });
  },
  setOutput: function(addOutput) {
    this.set({output: addOutput});
  },
  addLine: function(addMe, pre) {
    if (pre){
      var input = "<pre>"+addMe+"</pre>";
    }
    else{
      var input = addMe;
    }
    var currOutput = this.get("output");
    updated = currOutput + input;
    this.set({output: updated});
  }
});

//Backbone views

var returnToMenu = false;

var ConsoleView = Backbone.View.extend({
  events: {
    "keypress": "enter"
  },
  enter: function(event){
    if (event.which == 13){
      var input = jQuery(".console input").val();
      this.model.addLine(input, true);
      this.render();
      if (returnToMenu){
        this.model.addLine(mainMenu.display(), false);
        returnToMenu = false;
      }
      mainMenu.getChoice(input);
      global_input = input;
      jQuery(".console input").val("");
      this.render();
    }
  },
  initialize: function() {
    _.bindAll(this, 'render');
    this.model.on("change", this.render);
    
  },
  render: function() {
    var currOutput = this.model.get("output");
    jQuery("#console").html(currOutput);
    document.getElementById("console").scrollTop = 100000000;
  }
})

//set it all up

var mainMenu = new Menu("Main Menu", []);

window.term = new Console;

var termView = new ConsoleView({ el:jQuery(".console"), model: term});

mainMenu.addOption("Begin New Game", 1, function(){ 
  //term.addLine("begins the game", true); 
  //clear menu options
  mainMenu.clearOptions();
  //player creation
  var last_input = global_input;
  term.addLine('----------', true);
  term.addLine("What be ye name?");
});
mainMenu.addOption("ASCII Art Credits", 2, function(){ 
  for (var i=0;i<asciiCredits.length;i++){
    var line = asciiCredits[i];
    term.addLine(line, true); 
  }
  returnToMenu = true;
});

term.setOutput(mainMenu.display());
}// end tameTheDragons