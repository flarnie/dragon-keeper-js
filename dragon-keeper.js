function tameTheDragons(){

//ASCII Art

var asciiCredits = ["/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\",
"\\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/",
"     All ASCII Art was found on <a href='http://www.chris.com'>Chris.com</a>",
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
"",
"/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\_/\\",
"\\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/ \\/",
"(Press enter to return to the menu.)"]

var asciiDragons = ["<pre>                _/(               <~\\  /~>               )\\_</pre><pre>              .~   ~-.            /^-~~-^\\            .-~   ~.</pre><pre>           .-~        ~-._       : /~\\/~\\ :       _.-~        ~-.</pre><pre>        .-~               ~~--.__: \\0/\\0/ ;__,--~~               ~-.</pre><pre>       /                        ./\\. ^^ ./\\.                        \\</pre><pre>      .                         |  ( )( )  |                         .</pre><pre>      -~~--.        _.---._    /~   U`'U   ~\\    _.---._        .--~~-</pre><pre>            ~-. .--~       ~~-|              |-~~       ~--. .-~</pre><pre>               ~              |  :        :  |_             ~</pre><pre>                              `\\,'  :  :  `./' ~~--._</pre><pre>                             .(<___.'  `,___>),--.___~~-.</pre><pre>                             ~ (((( ~--~ ))))      _.~  _)</pre><pre>                                ~~~      ~~~/.--~ _.--~</pre>",
"<pre></pre><pre>                         ^\\    ^                  </pre><pre>                        / \\\\  / \\                 </pre><pre>                       /.  \\\\/   \\      |\\___/|   </pre><pre>    *----*           / / |  \\\\    \\  __/  O  O\\   </pre><pre>    |   /          /  /  |   \\\\    \\_\\/  \\     \\     </pre><pre>   / /\\/         /   /   |    \\\\   _\\/    \\'@___@      </pre><pre>  /  /         /    /    |     \\\\ _\\/       |U</pre><pre>  |  |       /     /     |      \\\\\/        |</pre><pre>  \\  |     /_     /      |       \\\\  )   \\ _|_</pre><pre>  \\   \\       ~-./_ _    |    .- ; (  \\_ _ _,\\'</pre><pre>  ~    ~.           .-~-.|.-*      _        {-,</pre><pre>   \\      ~-. _ .-~                 \\      /'</pre><pre>    \\                   }            {   .*</pre><pre>     ~.                 '-/        /.-~----.</pre><pre>       ~- _             /        >..----.\\\\\\\\\\</pre><pre>           ~ - - - - ^}_ _ _ _ _ _ _.-\\\\\\\\\\\\'</pre>",
"<pre>         ^                       ^</pre><pre>         |\\   \\        /        /|</pre><pre>        /  \\  |\\__  __/|       /  \\</pre><pre>       / /\\ \\ \\ _ \\/ _ /      /    \\</pre><pre>      / / /\\ \\ {*}\\/{*}      /  / \\ \\</pre><pre>      | | | \\ \\( (00) )     /  // |\\ \\</pre><pre>      | | | |\\ \\(V\"\"V)\\    /  / | || \\| </pre><pre>      | | | | \\ |^--^| \\  /  / || || || </pre><pre>     / / /  | |( WWWW__ \\/  /| || || ||</pre><pre>    | | | | | |  \\______\\  / / || || || </pre><pre>    | | | / | | )|______\\ ) | / | || ||</pre><pre>    / / /  / /  /______/   /| \\ \\ || ||</pre><pre>   / / /  / /  /\\_____/  |/ /__\\ \\ \\ \\ \</pre><pre>   | | | / /  /\\______/    \\   \\__| \\ \\ \\</pre><pre>   | | | | | |\\______ __    \\_    \\__|_| \\</pre><pre>   | | ,___ /\\______ _  _     \\_       \\  |</pre><pre>   | |/    /\\_____  /    \\      \\__     \\ |    /\\</pre><pre>   |/ |   |\\______ |      |        \\___  \\ |__/  \\</pre><pre>   v  |   |\\______ |      |            \\___/     |</pre><pre>      |   |\\______ |      |                    __/</pre><pre>       \\   \\________\\_    _\\               ____/</pre><pre>     __/   /\\_____ __/   /   )\\_,      _____/</pre><pre>    /  ___/  \\uuuu/  ___/___)    \\______/</pre><pre>    VVV  V        VVV  V </pre>", 
"<pre></pre><pre></pre><pre>                                                    .%,</pre><pre>                                                   X:-x\\',</pre><pre>                                                  X:/%;::\\:X</pre><pre>                                                 X:l%  ; :'\\:X</pre><pre>                                                X:l%   :  : '\\:X</pre><pre>                                                X:l%   :   :  '\\:X</pre><pre>                             b,      b,        X:/l%   :    :   \\:X</pre><pre>                            JPQ,    JPQ,       X:l%    :     :   '\\:X</pre><pre>                          .dP'd|._,=dPQq\\     X:l%'    :      :    '\\:X</pre><pre>                         xdP  #P\"'_    _,:   .X:l%     :       :    '\\:X</pre><pre>                      .d/\"p   '  'O \\  'O:;  X:l%'     :       :      \\:X</pre><pre>                    ,pP' q.          \\:  `#  X:ld       :       :      ':X</pre><pre>                  ,d\"   ,pq  .,-qx_,  \"\\  `Q:  l%       :       :       k:X</pre><pre>                ./'     Jp       .      `  ` 3  %       :        ;      k:X</pre><pre>               dP       p            p    `  `q         :        :      k:X</pre><pre>              d/       ; J,/\";xpx\"\\: '*q    ` `\\,       :         :     l:X.</pre><pre>             dP      ;'    dP      \"\\:_,`.q. /d b\\      :         :      k:X</pre><pre>           .d'      ;    dP            .\\_j '- u-'      :         :      k:X</pre><pre>X         ./'     ;'    /\"            .'                :         ;      k:X</pre><pre>\\X       .d'     ;    ,\"             :      X:l%        :        :       k:X</pre><pre>:\\X      d'     ;   ./'             :       X:/%        :        ;       k:X</pre><pre>::lX    JP     ;    J              :      .X:/ %        :       :        k;X</pre><pre>k:lX    #'    :    j'             :    .X:/ %           :       :       d:lX</pre><pre>k:lX   |P    ;     |             :  .X:/ %              :       ;       k;lX</pre><pre>k:lX   ||    ;    |'            : X:/ %                 ;       :      d:;X'</pre><pre>k:lX   d|   ;     :l           :X:/ %'                 :        :      k:lX</pre><pre>k:iX   #|   ;     ||          X:/ %                    ;        ;      k:lX</pre><pre> k:\\X  ||  ;       ||       X:/ %                     :        :       k:lX</pre><pre>  k:\\pQJb  ;        \\N.PQ XX/ %                      ;         ;       k:lX</pre><pre>   kJP.Ql\\;          XQ. J Q J                      :         ;        k:lX</pre><pre>   6Q : Q%           \\Q  Q   J              ;''''':.:;''::.  :         k:lX</pre><pre>  6QQ  : Ql           lQ'   J              ;        ;     ': :;''':.   k::X.</pre><pre> 6QQQ )  Ql           i6    Q             ;                 .;     ':.  k:\\X</pre><pre>  6QQ   J l           \\  6  Q            ;                            ':.k:X</pre><pre> 9QQ   J  i            l 6   6          ;                                 k;</pre>",
'<pre>@@@@@@@@@@@@@@@@@@@@@**^^""~~~"^@@^*@*@@**@@@@@@@@@</pre><pre>@@@@@@@@@@@@@*^^\'"~   , - \' \'; ,@@b. \'  -e@@@@@@@@@</pre><pre>@@@@@@@@*^"~      . \'     . \' ,@@@@(  e@*@@@@@@@@@@</pre><pre>@@@@@^~         .       .   \' @@@@@@, ~^@@@@@@@@@@@</pre><pre>@@@~ ,e**@@*e,  ,e**e, .    \' \'@@@@@@e,  "*@@@@@\'^@</pre><pre>@\',e@@@@@@@@@@ e@@@@@@       \' \'*@@@@@@    @@@\'   0</pre><pre>@@@@@@@@@@@@@@@@@@@@@\',e,     ;  ~^*^\'    ;^~   \' 0</pre><pre>@@@@@@@@@@@@@@@^""^@@e@@@   .\'           ,\'   .\'  @</pre><pre>@@@@@@@@@@@@@@\'    \'@@@@@ \'         ,  ,e\'  .    ;@</pre><pre>@@@@@@@@@@@@@\' ,&&,  ^@*\'     ,  .  i^"@e, ,e@e  @@</pre><pre>@@@@@@@@@@@@\' ,@@@@,          ;  ,& !,,@@@e@@@@ e@@</pre><pre>@@@@@,~*@@*\' ,@@@@@@e,   \',   e^~^@,   ~\'@@@@@@,@@@</pre><pre>@@@@@@, ~" ,e@@@@@@@@@*e*@*  ,@e  @@""@e,,@@@@@@@@@</pre><pre>@@@@@@@@ee@@@@@@@@@@@@@@@" ,e@\' ,e@\' e@@@@@@@@@@@@@</pre><pre>@@@@@@@@@@@@@@@@@@@@@@@@" ,@" ,e@@e,,@@@@@@@@@@@@@@</pre><pre>@@@@@@@@@@@@@@@@@@@@@@@~ ,@@@,,0@@@@@@@@@@@@@@@@@@@</pre><pre>@@@@@@@@@@@@@@@@@@@@@@@@,,@@@@@@@@@@@@@@@@@@@@@@@@@</pre><pre>"""""""""""""""""""""""""""""""""""""""""""""""""""</pre>'];
//OO JS classes
function Player(element){
  this.element = element;
  this.scales = [];
  this.altElements = ["water", "fire", "wind", "amethyst", "iron", "gold", "emerald", 
      "ruby", "grilled-cheese", "meatloaf", "silver", "cake", "rubix-cube", "glitter", 
      "crystal", "smoke", "data"];
  this.seeScales = function(){
    term.addLine("*********************SCALE COLLECTION********************",true);
    if (this.scales.length == 0){
      term.addLine("You have no scales yet.  :(", true);
    }
    else{
      for (var scale in this.scales){
        var currScale = this.scales[scale];
        var examine = "A "+currScale.element+"-tinted scale left by "+currScale.name;
        term.addLine(examine, true);
      }//end for
    }//end if/else
    term.addLine("*********************************************************",true);
    term.addLine("(Press enter to return to the menu.)", true);
  };//end seeScales
  this.addScale = function(elem, name){
    this.scales.push({"element":elem, "name":name});
    term.addLine("You have collected a scale!", true);
    term.addLine("(Press enter to continue.)", true);
  };//end addScale
  this.length = function(){
    return this.scales.length;
  };//end length
  this.randElement = function(){
    var randNum = Math.floor((Math.random()*this.altElements.length));
    var nextElem = this.altElements[randNum];
    var duplicate = false;
    for (scale in this.scales){
      if (this.scales[scale].element == nextElem){
        duplicate = true;
      }
    }
    if (duplicate){
      this.randElement();
    }
    else{
      this.element = nextElem;
    }

  };//end randElement
}

function Dragon(name, element, level){
  this.name = name;
  this.element = element;
  this.asleep = false;
  this.fullness = 8;
  //test
  this.fullnessAt = function(){
    return this.fullness;
  }
  this.level = level;
  this.points = 0;
  this.descs = [{"level":"baby", "desc":"A winged, scaly reptile the size of a cat."},
      {"level":"young", "desc":"A cow-sized lizard with bat-like wings</pre><pre> and sharp teeth."},
      {"level":"large", "desc":"A sprawling mess of scales, claws,</pre><pre> and teeth with wings."},
      {"level":"full-grown", "desc":"A majestic, sophisticated monster with intelligent eyes,</pre><pre> dagger-like claws, shining scales,</pre><pre> and wings that can blot out the sun."}]
  this.happygreets = ["pounces on you and licks your face.", "blinks at you in a thoughtful way.",
        "is happily crushing boulders in the back of the cave.", "nibbles playfully on your elbow.", 
        "is putting the moves on a wandering iguana.", "tries to talk to you- it's breath smells like rotten eggs!", 
        "is practicing flying.", "nuzzles you as you observe it.", "has brought you a dead mouse."];
  this.grumpgreets = ["hacks up some brimstone.", "is panting unhappily.", "growls at you.", 
          "smells worse than usual today!", "hisses at you.", "begins circling you like a shark.", 
          "curls into a little ball of dragon and sighs.", "makes fun of your haircut.", "grins at you with many sharp teeth!"]
  this.encounters = ["A tricksy invisible hobbit is trying to steal your gems!", 
      ("A knight is here, claiming "+this.name+" has eaten the princess."), 
      (this.name+" has become sad, because a small child stopped believing in them."), 
      ("A hoard of goblins are trying to imprison "+this.name+"!"),
    "A rival dragon has appeared and wants to claim the cave.",
    "Bright light blinds you- it is a phoenix!", "A terrifying elephant encroaches!", 
    "It's a Rodent Of Unusual Size!", "A fairy has appeared, offering to grant one wish."]
  //prints ASCII image and description of dragon
  this.show = function(){
    var level = this.level;
    term.addLine(asciiDragons[level], false);
    var who_is = "<pre>"+this.name+" is a "+this.descs[level].level+" dragon:</pre><pre>"+this.descs[level].desc+"</pre>";
    term.addLine(who_is, false);
    var ending = "It has "+this.element+"-tinted scales and smells of sulfur.";
    term.addLine(ending, true);
    term.addLine("(Press enter to return to the menu.)", true);
  };
  //prints message based on dragon fullness and wakefullness
  this.observe = function(){
    var sleeping = this.asleep ? "As "+this.name+" snores, smoke rises from his nostrils." : this.name+" prowls the cave, full of energy!";
    term.addLine(sleeping, true);
    if (!(this.asleep)){
      var random = Math.floor((Math.random()*this.happygreets.length)); 
      switch(this.fullness){
        case 1:
        case 2:
        case 3:
        case 4:
          var greeting = this.name+" "+this.grumpgreets[random];
          var status = this.name+"'s stomach is growling, and it looks at you in a strange way.";
          break;
        case 5:
        case 6:
        case 7:
        case 8:
          var greeting = this.name+" "+this.happygreets[random];
          var status = this.name+" seems content.";
          break;
        case 9:
        case 10:
          var greeting = this.name+" "+this.happygreets[random];
          var status = this.name+" whimpers- it has a tummy ache!";
          break;
        case 0:
          var greeting = this.name+" "+this.grumpgreets[random];
          var status = this.name+" is wasting away!";
          break;
      }//end switch
      term.addLine(greeting, true);
      term.addLine(status, true);
      term.addLine("(Press enter to return to the menu.)", true);
    }//end if
  };//end observe
  //updates dragon fullness based on user choice
  this.feed = function(choice){
    if (this.asleep){
      term.addLine("You have awakened a dragon.  What a brave soul!");
      this.asleep = false;
      this.fullness -= 1;
    }
    if (this.fullness < 10){
      switch(choice){
        case "1":
          this.fullness += 1;
          term.addLine("Your dragon munches the gem.", true);
          break;
        case "2":
          this.fullness += 5;
          term.addLine("Your dragon munches the gem.", true);
          break;
      }//end switch
      term.addLine("(Press enter to continue.)", true);
    }
    else {
      term.addLine("Your dragon is too full to eat.", true);
      termView.mode = "returnHome";
    }//end if/else
    if (this.fullness > 10){ this.fullness = 10; };
    var encounter = dragon1.pointUp();
    if (encounter == "levelUP"){
      termView.mode = "levelup";
    }
    else { termView.mode = "returnHome"; }//end if/else
  };//end feed
  this.hungerUp = function(){
    var flip = Math.floor((Math.random()*2)+1);
    if (this.fullness>0){
      this.fullness -= flip;
    if (this.asleep){
      if (flip == 1){
      this.asleep = false;
      var wakeMessage = this.name+" has woken up, and is hungry!";
      term.addLine(wakeMessage, true);
      this.fullness -= 1;
      }
      else{
        var sleepMessage = this.name+" is still asleep- 'ZZzzzzz'";
        term.addLine(sleepMessage, true);
      }//end inner if/elses
    }//end if
    if (this.fullness < 0){
      this.fullness = 0;
    }
    }
    var hungerHint = "Hunger Hint: its fullness = "+this.fullness;
    term.addLine(hungerHint,true);
  }//end hungerup
  //increases 'points', determining encounter frequency, and randomly puts Dragon to sleep
  this.pointUp = function(){
    if((this.fullness>5 && this.fullness<10 && !(this.asleep))){
      this.points += 1;
    }
    var flip = Math.floor((Math.random()*2)+1);
    if(this.points>0 && this.points<3 && flip==2){
      this.asleep = true;
      var sleepMessage = this.name+" has fallen asleep - 'ZZzzzzzzz'";
      term.addLine(sleepMessage,true);
    }
    if (this.points>=3){
      this.points = 0;
      return this.encounter();
    }//end final if
  };//end pointUp
  this.encounter = function(){
    term.addLine("* - * - * - * - * - * - * - * - * - * - * - * - * - * - * - *",true);
    term.addLine("         ENCOUNTER!~",true);
    var randEncounter = Math.floor((Math.random()*this.encounters.length));
    term.addLine(this.encounters[randEncounter], true);
    if (this.asleep){
      this.asleep = false;
      term.addLine("Your dragon has woken up!",true);
      this.fullness -= 1;
    }
    var fightsOff = this.name+" fights them off and becomes stronger!";
    term.addLine(fightsOff,true);
    term.addLine("(Press enter to continue.)", true);
    return "levelUP";
  }//end encounter
  this.levelUP = function(){
    this.level += 1;
    if (this.level<=3){
      this.show();
    }//end if
    return this.level;
  }//end levelUP and REMEMBER to trigger next game phase when level hits 4!
}

function Menu(menuName, opts){
  this.menuName = menuName;
  this.opts = opts;
  //returns # of options in the menu
  this.length = function(){
    return this.opts.length;
  };
  //changes menu title
  this.setTitle = function(nextTitle){
    this.menuName = nextTitle;
  };
  //adds new option to menu
  this.addOption = function(title, number, action){
    this.opts.push({"title":title, "number":number, "action":action})
  };
  //removes all options from menu
  this.clearOptions = function(){
    this.opts = [];
  };
  //returns a pretty formatted version of menu with options
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
    menuText += "<pre>(Type the number of your choice and press enter)</pre>";
    return menuText
  };//end this.display
  //executes function of that choice based on user input
  this.getChoice = function(choice){
    for (var z=0;z<this.length();z++){
      var compare = this.opts[z];
      if(String(choice) == String(compare.number)){
        //execute it's action
        compare.action();
        return true;
      }
      else if (z+1 == this.length()){
        return false;
      }
    }
  };//end this.getChoice
}//end menu class

//Backbone models
//these methods are self evident
var Console = Backbone.Model.extend({
  defaults: {
    output: "~Welcome to Dragon Keeper~",
    appendMe: '',
    userInput: '',
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
    this.set({appendMe: input});
  },
  addInput: function(addMe) {
    var sanitized = addMe.replace(/</gi, "").replace(/>/gi, "");
    this.set({userInput: sanitized});

  },
  clearInput: function() {
    this.set({userInput: ''});
  },
  getInput: function() {
    return this.get("userInput");
  }
});

//Backbone views

var ConsoleView = Backbone.View.extend({
  events: {
    "keypress": "enter"
  },
  mode: "menu", 
  //'menu' mode gets the option input and executes that option
  //'returnHome' mode reloads menu on enter
  //'ignore' ignores user input
  //'bounce' mode bounces through a faux generator thing, collecting user input or exposing story
  //'feed' is a mode just to get user input for feeding dragon
  //'levelup' is a mode just to display level-up info and possibly end game
  enter: function(event){
    if (event.which == 13){
      switch(this.mode){
        case "menu":
          var input = jQuery(".console input").val();
          this.model.addLine(input, true);
          this.render();
          var choice = mainMenu.getChoice(input);
          //if (this.mode = "returnHome"){ this.model.addLine("(Press enter to continue...)",true); };
          if (!choice){ this.model.addLine("ERROR: that was not a choice!", true)}
          jQuery(".console input").val("");
          break;
        case "returnHome":
          this.model.addLine(mainMenu.display(), false);
          this.mode = "menu";
          jQuery(".console input").val("");
          break;
        case "ignore":
          //this mode ignores user input
          break;
        case "bounce":
          var input = jQuery(".console input").val();
          jQuery(".console input").val("");
          this.model.addInput(input);
          gameState.doNext();
          break;
        case "feed":
          var input = jQuery(".console input").val();
          this.model.addInput(input);
          if (input == "1" || input == "2"){
            var fed = dragon1.feed(input);
          }
          else{
            this.model.addLine("Please select 1 for a small gem or 2 for a large gem.", true);
          }
          jQuery(".console input").val("");
          break;
        case "levelup":
          var newLevel = dragon1.levelUP();
          if (newLevel == 4){
            this.mode = "bounce";
          }
          else { this.mode = "returnHome" }
          break;
      }
    }
  },
  initialize: function() {
    _.bindAll(this, 'render');
    this.model.on("change", this.render);
    document.getElementById("termInput").focus();
  },
  render: function(append) {
    var currOutput = this.model.get("output");
    var currAppend = this.model.get("appendMe");
    if (this.model.hasChanged("output")) {
      jQuery("#console").html(currOutput);
    }
    else if (this.model.hasChanged("appendMe")) {
      jQuery("#console").append(currAppend);
    }
    document.getElementById("console").scrollTop = 100000000;
  }
})

//the faux generator that tracks game state

function GameState() {
  this.counter = 0;
  //runs the function for this "phase" of the game and then updates phase counter
  this.doNext = function(){
    num = this.counter;
    this.stages[num]();
    this.counter += 1;
  };
  //gets player's choice of elment, creates Player object, prints intro text
  var intro = function(){
    termView.mode = "ignore";
    var element = term.getInput()
    term.addLine(element, true);
    var traveled_far_and_wide = "<pre>You have traveled far and wide, searching for "+element+" and wonder.</pre><pre>Taking shelter in a small cave, you have found a large smooth stone.</pre><pre>Strange... as you examine it you seem to feel movement from within...</pre>";
    term.addLine(traveled_far_and_wide, false);
    term.addLine("(Press enter to continue.)", true);
    //yes the player object is global, not sure how else to do it!
    player1 = new Player(element);
    termView.mode = "bounce";
  };
  //prints 'Zzzz' text with timer and prints wake-up message
  var sleep = function(){
    termView.mode = "ignore";
    term.addLine("You fall asleep, using the smooth stone as your pillow~", true);
    var zs = "Zzz";
    var sleeper = setInterval(function(){
      zs += "z";
      term.addLine((zs+"..."),true);
    },1000);
    setTimeout(function(){
      clearInterval(sleeper);
      gameState.doNext();
    }, 5000);
  };
  //prints dragon hatching message
  var hatching = function(){
    termView.mode = "ignore";
    if(player1.length() > 0){
      player1.randElement();
    }
    var woke_up = "<pre>The stone burst in a cloud of "+player1.element+"-tinted smoke!</pre><pre>A baby dragon has hatched.</pre>"+asciiDragons[0];
    term.addLine(woke_up, false);
    term.addLine("(Press enter to continue.)", true);
    termView.mode = "bounce";
  };
  //prints prompt to name baby dragon
  var nameDragonPrompt = function(){
    termView.mode = "ignore";
    term.addLine("Congratulations! What will you name the dragon?", true);
    term.addLine("(Type a name and press enter.)", true);
    termView.mode = "bounce";
  };
  //creates Dragon object and calls 'show' on new Dragon
  var createDragon = function(){
    termView.mode = "ignore";
    var dragName = term.getInput().charAt(0).toUpperCase() + term.getInput().slice(1);
    //get element
    var element = player1.element;
    dragon1 = new Dragon(dragName, element, 0);
    dragon1.show();
    termView.mode = "bounce";
  };
  //clears mainMenu and turns it into Dragon themed menu, putting us back in "menu" mode
  var dragonMenu = function(){
    termView.mode = "ignore";
    //clear old menu
    mainMenu.clearOptions();
    mainMenu.setTitle("Raising your Dragon");
    mainMenu.addOption("Description of Dragon", 1, function(){
      dragon1.hungerUp();
      dragon1.show();
      var encounter = dragon1.pointUp();
      if (encounter == "levelUP"){
        termView.mode = "levelup";
      }
      else {
        termView.mode = "returnHome";
      }
    });
    mainMenu.addOption("Observe Dragon", 2, function(){
      dragon1.hungerUp();
      dragon1.observe();
      var encounter = dragon1.pointUp();
      if (encounter == "levelUP"){
        termView.mode = "levelup";
      }
      else {
        termView.mode = "returnHome";
      }
    });
    mainMenu.addOption("Feed Dragon", 3, function(){
      dragon1.hungerUp();
      term.addLine("<pre>Feed your dragon a large or small gem?</pre><pre>(enter 1 for small or 2 for large)</pre>", false);
      termView.mode = "feed";
    });
    mainMenu.addOption("Scale Collection", 4, function(){
      dragon1.hungerUp();
      player1.seeScales();
      var encounter = dragon1.pointUp();
      if (encounter == "levelUP"){
        termView.mode = "levelup";
      }
      else {
        termView.mode = "returnHome";
      }
    });
    term.addLine(mainMenu.display(), false);
    termView.mode = "menu";
    //we finally get back into menu mode!
  };
  //displays text about dragon leaving
  var partingWords = function(){
    termView.mode = "ignore";
    term.addLine("Your dragon roars with a burst of flame!", true);
    var timeHasCome = "THE TIME HAS COME.  "+dragon1.name+" the dragon must leave the nest.";
    term.addLine(timeHasCome, true);
    term.addLine("Any parting words for your scaly companion?", true);
    term.addLine("(Type what you would say and press enter.)", true);
    termView.mode = "bounce";
  };
  //displays parting message
  var goodbye = function(){
    termView.mode = "ignore";
    var parting = term.getInput();
    var sayBye = '<pre>"\''+parting+'\'; I will always remember that!"</pre><pre>growls your dragon, as it takes to the skies.</pre>';
    term.addLine(sayBye, false);
    term.addLine("(Press enter to continue.)", true);
    termView.mode = "bounce";

  };
  //displays message to begin new cycle, gets new scale
  var beginAgain = function(){
    termView.mode = "ignore";
    term.addLine(asciiDragons[dragon1.level], false);
    var flysAway = "<pre>As "+dragon1.name+" flies away, it leaves two things:</pre><pre>A scale that gleams like "+dragon1.element+" in the sun,</pre><pre>and a large, smooth stone....";
    term.addLine(flysAway, false);
    player1.addScale(dragon1.element, dragon1.name);
    termView.mode = "bounce";
  };
  //creates new scale in scale collection and RESTARTS GAME.
  var restart = function(){
    termView.mode = "ignore";
    var hatching = dragon1.name+" has left you a dragon egg.  It is hatching!";
    term.addLine(hatching, true);
    term.addLine("(Press enter to continue.)", true);
    gameState.counter = 1;
    termView.mode = "bounce";
  };
  this.stages = [intro, sleep, hatching, nameDragonPrompt, createDragon, dragonMenu, 
  partingWords, goodbye, beginAgain, restart];
}

var gameState = new GameState();

//set it all up

var mainMenu = new Menu("Main Menu", []);

window.term = new Console;

var termView = new ConsoleView({ el:jQuery(".console"), model: term});

mainMenu.addOption("Begin New Game", 1, function(){ 
  termView.mode = "bounce";
  term.addLine("~~~~~A New Adventure Begins~~~~~~", true);
  term.addLine("", true);
  term.addLine("What is your favorite element?", true);
  term.addLine("(Type the name of an element or thing and press enter.)", true);
});
mainMenu.addOption("ASCII Art Credits", 2, function(){ 
  for (var i in asciiCredits){
    var line = asciiCredits[i];
    term.addLine(line, true); 
  }
  termView.mode = "returnHome";
});

term.setOutput(mainMenu.display());
}// end tameTheDragons
