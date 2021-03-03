/***********************************************************************************
	Room of Your House  
	by Mary Huang

    Overview - This is a template for a simple state machine that goes between five states
 
    ---------------------------------------------------------------------
***********************************************************************************/

// Array of images
var images = [];

var istructions = [];

var drawFunction;



//load all images into an array
function preload() {
	images[0] = loadImage('assets/entrance.png');
	images[1] = loadImage('assets/livingroom.png');
	images[2] = loadImage('assets/kitchen.png');
	images[3] = loadImage('assets/bedroom.png');
	images[4] = loadImage('assets/bath.png');
	images[5] = loadImage('assets/movie.png');
	images[6] = loadImage('assets/instruction.png');

	font = loadFont('assets/Uni Sans Heavy.otf');
}
// Setup code goes here
function setup() {
  createCanvas(1920, 1080);

  textAlign(CENTER);
  textSize(50);
  textFont(font);

  drawFunction = drawSplash
 }


// Draw code goes here
function draw() {
	background(0);

	drawFunction();
}

//drawfunctions

drawSplash = function(){
	background(247, 236, 220);
    image(images[6],width/2, height/2, 1920, 1080);
}


drawentrance = function() {
    background(252, 244, 234);
    image(images[0],0, 0);
   

    fill(112, 112, 112);
    text("Entran", width/2, height - gTextOffset);
    text("Press L to Livingroom", width/2, height );
}

drawlivingroom = function() {
   background(252,223,186);
   image(images[1],0, 0);
   

   fill(112, 112, 112);
   text("Sleepy", width/2, height);
}

drawkitchen = function() {
   background(255,247,236);
   image(images[2],0, 0);
   

   fill(112, 112, 112);
   text("Calm", width/2, height);
}

drawbedroom = function() {
   background(193,201,177);
   image(images[3],0, 0);
 

   fill(112, 112, 112);
   text("Craving", width/2, height);

drawbathroom = function() {
   background(236,245,250);
   image(images[4],0, 0);
   

   fill(112, 112, 112);
   text("Happy", width/2, height);
}

drawmovieroom = function() {
   background(197, 197, 197 );
   image(images[5],0, 0);
   

   fill(112, 112, 112);
   text("Happy", width/2, height);
}

drawInstruction = function() {
   background(255,255,255);

   loadArray();
}


function keyTyped() {
	if( drawFunction === drawSplash ) {
		if( key === 'e' ) {
			drawFunction = drawentrance;
		}
		else if( key === 'l' ) {
			drawFunction = drawlivingroom;
		}
		else if( key === 'k' ) {
			drawFunction = drawkitchen;
		}
		else if( key === 'b' ) {
			drawFunction = drawbedroom;
		}
		else if( key === 'r' ) {
			drawFunction = drawbathroom;
		}
		else if( key === 'm' ) {
			drawFunction = drawmovieroom;
		}
		else if( key === 'i' ) {
			drawFunction = drawInstruction;
		}
	}
	
	if ( drawFunction === drawentrance ) {
		if( key === 'l' ) {
			drawFunction = drawlivingroom;
		}
		else if( key === 'i' ) {
			drawFunction = drawInstruction;
		}
	}

	if ( drawFunction === drawlivingroom ) {
		if( key === 'e' ) {
			drawFunction = drawentrance;
		}
		else if( key === 'k' ) {
			drawFunction = drawkitchen;
		}
		else if( key === 'i' ) {
			drawFunction = drawInstruction;
		}
	}

	if ( drawFunction === drawkitchen ) {
		if( key === 'b' ) {
			drawFunction = drawbedroom;
		}
		else if( key === 'l' ) {
			drawFunction = drawlivingroom;
		}
		else if( key === 'i' ) {
			drawFunction = drawInstruction;
		}
	}

	if ( drawFunction === drawbedroom ) {
		if( key === 'r' ) {
			drawFunction = drawbathroom;
		}
		else if( key === 'm' ) {
			drawFunction = drawmovieroom;
		}
		else if( key === 'k' ) {
			drawFunction = drawkitchen;
		}
		else if( key === 'i' ) {
			drawFunction = drawInstruction;
		}
	}
}

function loadArray() {
  strings[0] = "Press E to Entrance";
  strings[1] = "Press L to livingroom";
  strings[2] = "Press K to Kitchen";
  strings[3] = "Press B to Bedroom";
  strings[4] = "Press R to Bathroom";
  strings[5] = "Press M to Movieroom";

  fill(112, 112, 112);
  for( let i = 0 ; i < strings.length; i++ ) {
    text( strings[i], width/2, height/2);
   }
}