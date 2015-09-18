
module.exports= function(){

var data;
var name;	
var bul;
var terminal;



return{
	     grow: function(simName, customObject){ 
        terminal= customObject;
        printCopyright(simName);},
harvestData: function(){ return data;}
};

function checkColors(name){
  var colors=Object.getOwnPropertyNames(terminal.colors);
  bul=false; // boolean to control if its defined the property

  for(var i=0; i<colors.length; i++){//iterate over prop names

    if(colors[i] === name){//if it is
      bul=true;
    }
  }
  if(bul!==true){//if its finded the statement of the tag
    terminal.colors[name]=terminal.colors.default;
    } 
}


function checkProperties(name){
var properties= Object.getOwnPropertyNames(terminal);
  bul=false; // boolean to control if its defined the property

  for(var i=0; i<properties.length; i++){//iterate over prop names
    if(properties[i] === name){//if it is
      bul=true;
    }
  }
  if(bul!==true){//if its finded the statement of the tag
    throw new Error('Not defined '+name);
    }  
}

function printCopyright(simName){ 
var name= simName.slice(2); //delete simbol of the name 
  checkProperties(name);
  checkColors(name);
    var copyoutput=terminal[name].split(" ");//get the words
    console.log(); 
    console.log(terminal.colors[name](copyoutput[0] +" \xA9 "+copyoutput.slice(1).join(" ")));
    console.log();//output the license name + symbol + name
}




};