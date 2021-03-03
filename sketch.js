/***********************************************************************************
	Room of My Dream House
	by Mary Huang

    Overview - This is a room tour of my dream house website page with arrays intructions
 
    ---------------------------------------------------------------------
***********************************************************************************/

// Array of images
var images = [];

var drawFunction;

var gTextOffset = 500;

var gRoomTextOffset = 440;

var strings = [];

var instructionStrings;

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

  rectMode(CENTER);
  textAlign(CENTER);
  textSize(50);
  textFont(font);
  noStroke();
  instructionStrings()

  drawFunction = drawSplash
 }


// Draw code goes here
function draw() {
	background(0);

	drawFunction();
	print(mouseX,mouseY);
}

//drawfunctions

drawSplash = function(){
	background(247, 236, 220);
    image(images[6],0 ,0 , 1920, 1080);
}


drawentrance = function() {
    background(252, 244, 234);
    image(images[0],0, 0);
   
    fill(165, 133, 91);
    rect(855 , 1022, 80, 50, 30, 30, 30, 30);

    fill(112, 112, 112);
    text("Entrance", width/2, height/2 + gRoomTextOffset);
    text(strings[1], width/2, height/2 + gTextOffset);
}

drawlivingroom = function() {
   background(252,223,186);
   image(images[1],0, 0);
   
   fill(214, 182, 139);
   rect(375, 1022, 80, 50, 30, 30, 30, 30);

   fill(238, 159, 56);
   rect(1400, 1022, 80, 50, 30, 30, 30, 30);

   fill(112, 112, 112);
   text("Livingroom", width/2, height/2 + gRoomTextOffset);
   text(strings[0], width/2 - gTextOffset, height/2 + gTextOffset);
   text(strings[2], width/2 + gTextOffset, height/2 + gTextOffset);   
}

drawkitchen = function() {
   background(255,247,236);
   image(images[2],0, 0);

   fill(214, 182, 139);
   rect(355, 1022, 80, 50, 30, 30, 30, 30);

   fill(165, 133, 91);
   rect(1385, 1022, 80, 50, 30, 30, 30, 30);   

   fill(112, 112, 112);
   text("Kitchen", width/2, height/2 + gRoomTextOffset);
   text(strings[1], width/2 - gTextOffset, height/2 + gTextOffset);
   text(strings[3], width/2 + gTextOffset, height/2 + gTextOffset);
}

drawbedroom = function() {
   background(193,201,177);
   image(images[3],0, 0);
 
   fill(135, 160, 180);
   rect(371, 1022, 80, 50, 30, 30, 30, 30);

   fill(169, 169, 169);
   rect(1358, 1022, 80, 50, 30, 30, 30, 30);   

   fill(112, 112, 112);
   text("Bedroom", width/2, height/2 + gRoomTextOffset);
   text(strings[4], width/2 - gTextOffset, height/2 + gTextOffset);
   text(strings[5], width/2 + gTextOffset, height/2 + gTextOffset);
}

drawbathroom = function() {
   background(236,245,250);
   image(images[4],0, 0);
   
   fill(116, 151, 119);
   rect(886, 1022, 80, 50, 30, 30, 30, 30);   

   fill(112, 112, 112);
   text("Bathroom", width/2, height/2 + gRoomTextOffset);
   text(strings[3], width/2, height/2 + gTextOffset);
}

drawmovieroom = function() {
   background(197, 197, 197 );
   image(images[5],0, 0);
   
   fill(116, 151, 119);
   rect(884, 1022, 80, 50, 30, 30, 30, 30);   

   fill(112, 112, 112);
   text("Movieroom", width/2, height/2 + gRoomTextOffset);
   text(strings[3], width/2, height/2 + gTextOffset);
}


function instructionStrings() {
	strings[0] = "Press   E   to Entrance";
	strings[1] = "Press   L   to livingroom";
	strings[2] = "Press   K   to Kitchen";
	strings[3] = "Press   B   to Bedroom";
    strings[4] = "Press   R   to Bathroom";
    strings[5] = "Press   M   to Movieroom";

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
		else if( key === 's' ) {
			drawFunction = drawSplash;
		}
	}
	
	if ( drawFunction === drawentrance ) {
		if( key === 'l' ) {
			drawFunction = drawlivingroom;
		}
		else if( key === 's' ) {
			drawFunction = drawSplash;
		}
	}

	if ( drawFunction === drawlivingroom ) {
		if( key === 'e' ) {
			drawFunction = drawentrance;
		}
		else if( key === 'k' ) {
			drawFunction = drawkitchen;
		}
		else if( key === 's' ) {
			drawFunction = drawSplash;
		}
	}

	if ( drawFunction === drawkitchen ) {
		if( key === 'b' ) {
			drawFunction = drawbedroom;
		}
		else if( key === 'l' ) {
			drawFunction = drawlivingroom;
		}
		else if( key === 's' ) {
			drawFunction = drawSplash;
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
		else if( key === 's' ) {
			drawFunction = drawSplash;
		}
	}

	if ( drawFunction === drawmovieroom ) {
		if( key === 'b' ) {
			drawFunction = drawbedroom;
		}
		else if( key === 's' ) {
			drawFunction = drawSplash;
		}
	}

	if ( drawFunction === drawbathroom ) {
		if( key === 'b' ) {
			drawFunction = drawbedroom;
		}
		else if( key === 's' ) {
			drawFunction = drawSplash;
		}
	}

}

