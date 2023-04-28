class Setup extends Phaser.Scene {
   constructor() {
      super('setup');
   }

   preload() {
      this.load.path = "./assets/";
      this.load.image("mouse", "images/MouseIcon.png");
   }

   create() {
      this.input.on('pointerdown', () => {this.scene.start('splash')});

      let textA = this.add.text(320, 150,
         "This cinematic will play mostly automatically. However, there will be a scene which requires the user to click anywhere on the canvas to proceed.",
         {
            font: "24px Serif",
            color: "#fcfcfc"
         }
      );
      textA.setOrigin(0.5);
      textA.setWordWrapWidth(400);

      let textB = this.add.text(320, 280,
         "Please keep an eye out for a flashing icon like the one in the bottom-right corner now. The icon indicates that the user needs to click to continue.",
         {
            font: "24px Serif",
            color: "#fcfcfc"
         }
      );
      textB.setOrigin(0.5);
      textB.setWordWrapWidth(400);

      let mouseIcon = this.add.image(560, 400, "mouse");
      this.tweens.add({
         targets: mouseIcon,
         alpha: 0.25,
         yoyo: true,
         duration: 1200,
         ease: "Quartic",
         repeat: -1
      });
   }
}

class Splash extends Phaser.Scene {
   constructor() {
      super('splash');
   }

   preload() {
      this.load.path = "./assets/";
      this.load.image("gemstone", "images/Gemstone.png");
      this.load.image("halo", "images/LogoHalo.png");
      this.load.image("studioSign", "images/DivineGemstoneLogoText.png");
      this.load.audio("hum", "sounds/hum-edited.wav");
   }

   create() {
      let sfx = this.sound.add("hum", {loop: false});

      this.graphics = this.add.graphics();
      this.graphics.fillStyle(0xfff2d3, 0.75);
      let spotlightCone = this.graphics.fillTriangle(320, 0, 600, 360, 40, 360);
      this.tweens.add({
         targets: spotlightCone,
         alpha: 0,
         duration: 1000,
         delay: 750,
         ease: 'Linear'
      });

      let halo = this.add.image(320, 240, "halo");
      halo.setAlpha(0); // Halo starts out invisible
      this.tweens.add({
         targets: halo,
         alpha: 1,
         duration: 1800,
         delay: 750,
         ease: 'Linear'
      });

      let gemstone = this.add.image(320, -200, "gemstone");
      this.tweens.add({
         targets: gemstone,
         y: 240,
         duration: 700,
         ease: 'Linear'
      });

      let sign = this.add.image(320, -200, "studioSign");
      sign.setScale(0.3);
      this.tweens.add({
         targets: sign,
         y: 380,
         duration: 500,
         delay: 2300,
         ease: 'Linear'
      });

      this.time.delayedCall(700, () => {sfx.play()});
      this.time.delayedCall(4500, () => {this.scene.start('student')});
   }

   update() {
      
   }
}

class Student extends Phaser.Scene {
   constructor() {
      super('student');
   }

   preload() {
      this.load.path = "./assets/";
   }

   create() {

   }

   update() {
      
   }
}

class Vigilante extends Phaser.Scene {
   constructor() {
      super('vigilante');
   }

   preload() {
      this.load.path = "./assets/";
   }

   create() {

   }

   update() {
      
   }
}

class Poem extends Phaser.Scene {
   constructor() {
      super('poemText');
   }

   create() {

   }

   update() {
      
   }
}

class MainMenu extends Phaser.Scene {
   constructor() {
      super('mainMenu');
   }

   preload() {
      this.load.path = "./assets/";
   }

   create() {

   }

   update() {
      
   }
}

class Exposition extends Phaser.Scene {
   constructor() {
      super('exposition');
   }

   create() {

   }

   update() {
      
   }
}

class GameStart extends Phaser.Scene {
   constructor() {
      super('gameStart');
   }

   preload() {
      this.load.path = "./assets/";
   }

   create() {

   }

   update() {
      
   }
}

class Outro extends Phaser.Scene {
   constructor() {
      super('outro');
   }

   create() {

   }

   update() {
      
   }
}
