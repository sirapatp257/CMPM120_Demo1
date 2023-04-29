class Setup extends Phaser.Scene {
   constructor() {
      super('setup');
   }

   preload() {
      this.load.path = "./assets/";
      this.load.image("mouse", "images/MouseIcon.png");
      this.load.image("gemstone", "images/Gemstone.png");
      this.load.image("halo", "images/LogoHalo.png");
      this.load.image("studioSign", "images/DivineGemstoneLogoText.png");
      this.load.audio("hum", "sounds/hum-edited.wav");
      this.load.image("dayBG", "images/DayBackground.png");
      this.load.image("student", "images/Sharkman_Citizen.png");
      this.load.image("nightBG", "images/NightBackground.png");
      this.load.image("vigilante", "images/Sharkman_Hero.png");
      this.load.image("mainMenuBG", "images/MainMenuBackground.png");
      this.load.image("titleText", "images/GameTitleText.png");
      this.load.audio("bgm", "sounds/SharkmanAnthem.wav");
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
      mouseIcon.setScale(0.5);
      this.tweens.add({
         targets: mouseIcon,
         alpha: {start: 1, to: 0.1},
         yoyo: true,
         duration: 1200,
         ease: "Sine",
         repeat: -1
      });
   }
}

class Splash extends Phaser.Scene {
   constructor() {
      super('splash');
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

   create() {
      this.add.image(320, 240, "dayBG");
      this.add.image(320, 240, "student");

      let textbox = this.add.rectangle(160, 720, 320, 480, 0);

      let text = this.add.text(160, 720,
         "A student by day...",
         {
            font: "28px Arial",
            color: "#fcfcfc"
         }
      );
      text.setOrigin(0.5);
      
      this.tweens.add({
         targets: [textbox, text],
         y: 240,
         duration: 1000,
         ease: "Quartic"
      });

      this.time.delayedCall(2000, () => {
         const fx = this.cameras.main.postFX.addWipe();
         this.scene.transition({
            target: 'vigilante',
            duration: 300,
            moveBelow: true,
            onUpdate: (progress) => {
               fx.progress = progress;
            }
         });
      });
   }

   update() {
      
   }
}

class Vigilante extends Phaser.Scene {
   constructor() {
      super('vigilante');
   }

   create() {
      this.add.image(320, 240, "nightBG");
      this.add.image(320, 240, "vigilante");

      let textbox = this.add.rectangle(480, -240, 320, 480, 0);

      let text = this.add.text(480, -240,
         "A vigilante by night.",
         {
            font: "28px Arial",
            color: "#fcfcfc"
         }
      );
      text.setOrigin(0.5);
      
      this.tweens.add({
         targets: [textbox, text],
         y: 240,
         duration: 1000,
         ease: "Quartic"
      });

      this.time.delayedCall(2500, () => {
         const fx = this.cameras.main.postFX.addWipe(0.1, 1, 0);
         this.scene.transition({
            target: 'poem',
            duration: 300,
            moveBelow: true,
            onUpdate: (progress) => {
               fx.progress = progress;
            }
         });
      });
   }

   update() {
      
   }
}

class Poem extends Phaser.Scene {
   constructor() {
      super('poem');
   }

   create() {
      let partA = this.add.text(-240, 120, 
         "There is no time for schoolwork when there are villains to fight.",
         {
            font: "28px Arial",
            color: "#fcfcfc"
         }
      );
      partA.setOrigin(0.5);
      partA.setWordWrapWidth(400);

      this.tweens.add({
         targets: partA,
         x: 320,
         duration: 2000,
         ease: "Linear"
      });

      let partB = this.add.text(880, 220, 
         "The world will soon fall into the clutches of the evil Cetus Clan.",
         {
            font: "28px Arial",
            color: "#fcfcfc"
         }
      );
      partB.setOrigin(0.5);
      partB.setWordWrapWidth(400);

      this.tweens.add({
         targets: partB,
         x: 320,
         duration: 2000,
         delay: 2300,
         ease: "Linear"
      });

      let partC = this.add.text(320, 320, 
         "Hear our cry. Shine bright, our beacon of hope, and become...",
         {
            font: "28px Arial",
            color: "#fcfcfc"
         }
      );
      partC.setOrigin(0.5);
      partC.setWordWrapWidth(400);
      partC.setAlpha(0);

      this.tweens.add({
         targets: partC,
         alpha: 1,
         duration: 2000,
         delay: 4600,
         ease: "Quartic"
      });

      this.time.delayedCall(8000, () => {this.cameras.main.fadeOut(1000, 0, 0, 0, (c, t) => {
         if (t >= 1) this.scene.start('mainMenu');
      })});
   }

   update() {
      
   }
}

class MainMenu extends Phaser.Scene {
   constructor() {
      super('mainMenu');
   }

   create() {
      this.clickable = false; // Disallow clicking at first

      let bgm = this.sound.add("bgm", {loop: true});
      bgm.play();

      let background = this.add.image(320, 240, "mainMenuBG");
      background.setAlpha(0);

      let titleText = this.add.image(320, 240, "titleText");
      titleText.setScale(0.3);

      // Learned how to bold font from https://www.html5gamedevs.com/topic/15897-how-to-set-italic-and-bold-words-with-position/
      let menuText = this.add.text(320, 400, 
         "PLAY\nSETTINGS\nQUIT",
         {
            font: "bold 30px Arial",
            color: "0"
         }
      );
      menuText.setOrigin(0.5);

      let mark = this.add.circle(230, 367, 10, 0x00ff3c);
      mark.setAlpha(0);

      let mouseIcon = this.add.image(590, 420, "mouse");
      mouseIcon.setScale(0.5);
      mouseIcon.setAlpha(0);

      this.tweens.add({
         targets: titleText,
         y: 90,
         duration: 600,
         delay: 800,
         ease: "Linear"
      });

      this.tweens.add({
         targets: background,
         alpha: 1,
         duration: 400,
         delay: 1400,
         ease: "Linear"
      });

      this.cameras.main.fadeIn(800);
      this.time.delayedCall(1800, () => {
         mark.setAlpha(1);
         mouseIcon.setAlpha(1);
         this.clickable = true; // Allow clicking
      });

      this.tweens.add({
         targets: mouseIcon,
         alpha: {start: 0, from: 1, to: 0.1},
         yoyo: true,
         duration: 1200,
         delay: 1800,
         ease: "Sine",
         repeat: -1
      });

      this.input.on('pointerdown', () => {
         if(this.clickable) {
            bgm.stop();
            this.cameras.main.fadeOut(1000, 0, 0, 0, (c, t) => {
               if (t >= 1) this.scene.start('exposition');
            })
         }
      });
   }

   update() {
      
   }
}

class Exposition extends Phaser.Scene {
   constructor() {
      super('exposition');
   }

   create() {
      this.graphics = this.add.graphics();
      this.graphics.fillStyle(0, 1);
      this.graphics.fillRect(0, 0, 640, 480);

      let timeText = this.add.text(320, 190, 
         "2025 CE",
         {
            font: "24px Arial",
            color: "#fcfcfc"
         }
      );
      timeText.setOrigin(0.5);

      this.tweens.add({
         targets: timeText,
         alpha: {start: 0, to: 1},
         duration: 400,
         ease: "Linear"
      });

      let placeText = this.add.text(320, 260, 
         "Somewhere on the Olive Archipelago...",
         {
            font: "24px Arial",
            color: "#fcfcfc"
         }
      );
      placeText.setOrigin(0.5);
      
      this.tweens.add({
         targets: placeText,
         alpha: {start: 0, to: 1},
         duration: 400,
         delay: 1200,
         ease: "Linear"
      });

      this.time.delayedCall(2000, () => {
         const fx = this.cameras.main.postFX.addWipe(0.1, 0, 1);
         this.scene.transition({
            target: 'gameStart',
            duration: 1000,
            moveBelow: true,
            onUpdate: (progress) => {
               fx.progress = progress;
            }
         })
      });
   }

   update() {
      
   }
}

class GameStart extends Phaser.Scene {
   constructor() {
      super('gameStart');
   }

   create() {
      this.add.image(320, 240, "nightBG");
      this.time.delayedCall(2500, () => {this.scene.start('outro')});
   }

   update() {
      
   }
}

class Outro extends Phaser.Scene {
   constructor() {
      super('outro');
   }

   create() {
      let partA = this.add.text(320, 180, 
         "There is no game here (yet)",
         {
            font: "24px Arial",
            color: "#fcfcfc"
         }
      );
      partA.setOrigin(0.5);

      let partB = this.add.text(320, 260, 
         "Please take this as an unceremonious outro",
         {
            font: "24px Arial",
            color: "#fcfcfc"
         }
      );
      partB.setOrigin(0.5);
   }

   update() {
      
   }
}
