let config = {
   type: Phaser.WEBGL,
   width: 640,
   height: 480,
   backgroundColor: 0,
   scene: [Setup, Splash, Student, Vigilante, Poem, MainMenu, Exposition, GameStart, Outro]
}

let game = new Phaser.Game(config);
