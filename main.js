let config = {
   type: Phaser.WEBGL,
   scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: 1920,
      height: 1080
   },
   backgroundColor: 0,
   scene: [Setup, Splash, Student, Vigilante, Poem, MainMenu, Exposition, GameStart, Outro]
}

let game = new Phaser.Game(config);
