var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(600, 400, {backgroundColor: 0x3344ee});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

//Initialize game textures
var guy_texture = PIXI.Texture.fromImage("guy.png");
var cloud_texture = PIXI.Texture.fromImage("cloud.png");
var heart_texture = PIXI.Texture.fromImage("heart.png");
var girder_texture = PIXI.Texture.fromImage("girder.png");

//Initialize sprites
var guy_sprite = new PIXI.Sprite(guy_texture);

var heart_sprite_1 = new PIXI.Sprite(heart_texture);
var heart_sprite_2 = new PIXI.Sprite(heart_texture);
var heart_sprite_3 = new PIXI.Sprite(heart_texture);

var cloud_sprite_1 = new PIXI.Sprite(cloud_texture);
var cloud_sprite_2 = new PIXI.Sprite(cloud_texture);
var cloud_sprite_3 = new PIXI.Sprite(cloud_texture);
var cloud_sprite_4 = new PIXI.Sprite(cloud_texture);
var cloud_sprite_5 = new PIXI.Sprite(cloud_texture);
var cloud_sprite_6 = new PIXI.Sprite(cloud_texture);
var cloud_sprite_7 = new PIXI.Sprite(cloud_texture);
var cloud_sprite_8 = new PIXI.Sprite(cloud_texture);

var girder_sprite_1 = new PIXI.Sprite(girder_texture);
var girder_sprite_2 = new PIXI.Sprite(girder_texture);
var girder_sprite_3 = new PIXI.Sprite(girder_texture);
var girder_sprite_4 = new PIXI.Sprite(girder_texture);

//Create the guy container
var guy = new PIXI.Container();
guy.position.x = 300;
guy.position.y = 325;
stage.addChild(guy);

//Add guy sprites to the dog conatiner
guy.addChild(guy_sprite);
guy_sprite.anchor.x = 0.5;
guy_sprite.anchor.y = 0.5;
guy_sprite.position.x = 0;
guy_sprite.position.y = 0;

//create the cloud container
var clouds = new PIXI.Container();
clouds.position.x = 300;
clouds.position.y = 0;
stage.addChild(clouds);

//Add clouds to the container
clouds.addChild(cloud_sprite_1);
cloud_sprite_1.anchor.x = 0.5;
cloud_sprite_1.anchor.y = 0.5;
cloud_sprite_1.position.x = 30;
cloud_sprite_1.position.y = 0;

clouds.addChild(cloud_sprite_2);
cloud_sprite_2.anchor.x = 0.5;
cloud_sprite_2.anchor.y = 0.5;
cloud_sprite_2.position.x = -70;
cloud_sprite_2.position.y = -50;

clouds.addChild(cloud_sprite_3);
cloud_sprite_3.anchor.x = 0.5;
cloud_sprite_3.anchor.y = 0.5;
cloud_sprite_3.position.x = 270;
cloud_sprite_3.position.y = -150;

clouds.addChild(cloud_sprite_4);
cloud_sprite_4.anchor.x = 0.5;
cloud_sprite_4.anchor.y = 0.5;
cloud_sprite_4.position.x = 170;
cloud_sprite_4.position.y = -175;

clouds.addChild(cloud_sprite_5);
cloud_sprite_5.anchor.x = 0.5;
cloud_sprite_5.anchor.y = 0.5;
cloud_sprite_5.position.x = -120;
cloud_sprite_5.position.y = -250;

clouds.addChild(cloud_sprite_6);
cloud_sprite_6.anchor.x = 0.5;
cloud_sprite_6.anchor.y = 0.5;
cloud_sprite_6.position.x = -270;
cloud_sprite_6.position.y = -300;

clouds.addChild(cloud_sprite_7);
cloud_sprite_7.anchor.x = 0.5;
cloud_sprite_7.anchor.y = 0.5;
cloud_sprite_7.position.x = 200;
cloud_sprite_7.position.y = -350;

clouds.addChild(cloud_sprite_8);
cloud_sprite_8.anchor.x = 0.5;
cloud_sprite_8.anchor.y = 0.5;
cloud_sprite_8.position.x = 0;
cloud_sprite_8.position.y = -400;

//Create the girder container
var girders = new PIXI.Container();
girders.position.x = 300;
girders.position.y = 0;
stage.addChild(girders);

//Add the girder sprites to the container
girders.addChild(girder_sprite_1);
girder_sprite_1.anchor.x = 0.5
girder_sprite_1.anchor.y = 0.5
girder_sprite_1.position.x = 0;
girder_sprite_1.position.y = -10;

girders.addChild(girder_sprite_2);
girder_sprite_2.anchor.x = 0.5
girder_sprite_2.anchor.y = 0.5
girder_sprite_2.position.x = 100;
girder_sprite_2.position.y = -225;

girders.addChild(girder_sprite_3);
girder_sprite_3.anchor.x = 0.5
girder_sprite_3.anchor.y = 0.5
girder_sprite_3.position.x = -100;
girder_sprite_3.position.y = -500;

girders.addChild(girder_sprite_4);
girder_sprite_4.anchor.x = 0.5
girder_sprite_4.anchor.y = 0.5
girder_sprite_4.position.x = 75;
girder_sprite_4.position.y = -750;


//Create the health bar container
var health_bar = new PIXI.Container();
health_bar.position.x = 30;
health_bar.position.y = 30;
stage.addChild(health_bar);

//Add the heart sprites to the health bar
health_bar.addChild(heart_sprite_1);
heart_sprite_1.anchor.x = 0.5;
heart_sprite_1.anchor.y = 0.5;
heart_sprite_1.position.x = 0;
heart_sprite_1.position.y = 0;

health_bar.addChild(heart_sprite_2);
heart_sprite_2.anchor.x = 0.5;
heart_sprite_2.anchor.y = 0.5;
heart_sprite_2.position.x = 30;
heart_sprite_2.position.y = 0;

health_bar.addChild(heart_sprite_3);
heart_sprite_3.anchor.x = 0.5;
heart_sprite_3.anchor.y = 0.5;
heart_sprite_3.position.x = 60;
heart_sprite_3.position.y = 0;

//Colision Detection Code
//Tried several different ideas, couldn't get colision detection to work =(

//Keyboard functions
function keydownEventHandler(e) {

	if (e.keyCode == 87) { //W key
		guy.position.y -= 5;
	}

	if (e.keyCode == 83) { //S key
		guy.position.y +=5;
	}

	if (e.keyCode == 65) { //A key
		guy.position.x -= 5;
		guy.rotation -= 0.025
	}

	if (e.keyCode == 68) { //D key
		guy.position.x += 5;
		guy.rotation += 0.025
	}
}

document.addEventListener('keydown', keydownEventHandler);

var cloudCount = 0;
var girderCount = 0;

var healthCount = 0;

function animate() {

	requestAnimationFrame(animate);
	renderer.render(stage);

	cloudCount++;
	girderCount++;

	if (cloudCount == 850){
		clouds.position.y = -10;
		cloudCount = 0;
	}

	if (girderCount == 600){
		girders.position.y = -20;
		girderCount = 0;
	}

	clouds.position.y += 1;
	girders.position.y += 2;

	/*Colision detection code
	When a colision between the "guy" and a girder occurs, remove a heart from the health bar
	if (colision){
		healthCount++;

		if (healthCount == 1){
			heart_sprite_3.position.x = -1000;
		}
		if (healthCount == 2){
			heart_sprite_2.position.x = -1000;
		}
		if (healthCount == 3){
			heart_sprite_1.position.x = -1000;
			//GAME OVER
		}

	}
	*/
}
animate();