var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x3344ee});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

//Initialize game textures
var guy_texture = PIXI.Texture.fromImage("guy.png");
var dog_texture = PIXI.Texture.fromImage("dog.png");

//Initialize sprites
var guy_sprite = new PIXI.Sprite(guy_texture);
var dog_sprite = new PIXI.Sprite(dog_texture);


//Create the dog container
var dog = new PIXI.Container();
dog.position.x = 175;
dog.position.y = 375;
stage.addChild(dog);

//Add dog sprites to the dog conatiner
dog.addChild(dog_sprite);
dog_sprite.anchor.x = 0.5;
dog_sprite.anchor.y = 0.5;
dog_sprite.position.x = 0;
dog_sprite.position.y = 0;

guy_sprite.anchor.x = 0.5;
guy_sprite.anchor.y = 0.5;



guy_sprite.position.x = 100;
guy_sprite.position.y = 350;

stage.addChild(guy_sprite);


function animate() {
	requestAnimationFrame(animate);
	renderer.render(stage);
}
animate();