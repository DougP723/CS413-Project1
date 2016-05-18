var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x3344ee});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var guy_texture = PIXI.Texture.fromImage("guy.png");
var dog_texture = PIXI.Texture.fromImage("dog.png");

var guy_sprite = new PIXI.Sprite(guy_texture);
var dog_sprite = new PIXI.Sprite(dog_texture);

guy_sprite.anchor.x = 0.5;
guy_sprite.anchor.y = 0.5;

dog_sprite.anchor.x = 0.5;
dog_sprite.anchor.y = 0.5;

dog_sprite.position.x = 200;
dog_sprite.position.y = 350;

guy_sprite.position.x = 100;
guy_sprite.position.y = 350;

stage.addChild(guy_sprite);
stage.addChild(dog_sprite);

function animate() {
	requestAnimationFrame(animate);
	renderer.render(stage);
}
animate();