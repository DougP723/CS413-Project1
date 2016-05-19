var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x3344ee});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

//Initialize game textures
var dog_texture = PIXI.Texture.fromImage("dog-1.png");
var dog_texture_left = PIXI.Texture.fromImage("dog-1-left.png");
var dog_texture_down = PIXI.Texture.fromImage("dog-1-down.png");
var dog_texture_1_right = PIXI.Texture.fromImage("dog-1-right.png");
var dog_texture_2_right = PIXI.Texture.fromImage("dog-2-right.png");

//Initialize sprites
var dog_sprite = new PIXI.Sprite(dog_texture);

//Create the dog container
var dog = new PIXI.Container();
dog.position.x = 175;
dog.position.y = 350;
stage.addChild(dog);

//Add dog sprites to the dog conatiner
dog.addChild(dog_sprite);
dog_sprite.anchor.x = 0.5;
dog_sprite.anchor.y = 0.5;
dog_sprite.position.x = 0;
dog_sprite.position.y = 0;

//stage.addChild(guy_sprite);


function keydownEventHandler(e) {

	

	if (e.keyCode == 87) { //W key
		dog.position.y -= 10;
		dog_sprite.texture = dog_texture;
	}

	if (e.keyCode == 83) { //S key
		dog.position.y +=10;
		dog_sprite.texture = dog_texture_down;

	}

	if (e.keyCode == 65) { //A key
		dog.position.x -= 10;
		dog_sprite.texture = dog_texture_left;
	}

	if (e.keyCode == 68) { //D key

		dog.position.x += 10;
		dog_sprite.texture = dog_texture_1_right;
	}
}

document.addEventListener('keydown', keydownEventHandler);

function animate() {
	requestAnimationFrame(animate);
	renderer.render(stage);
}
animate();