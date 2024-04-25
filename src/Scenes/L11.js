class L11 extends Phaser.Scene {

    keyA;
    keyD;
    keySpace;
    constructor() {
        super("L11");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings
        this.bodyX = 300;
        this.bodyY = 550;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {

        this.load.setPath("./assets/");

        this.load.image("body", "character_squareRed.png");

        this.load.image("bullet", "effect_shot.png");

        // update instruction text
        document.getElementById('description').innerHTML = '<h2>L11.js<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "body", "character_squareRed.png");
        

        this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
    
        if(this.keyA.isDown && my.sprite.body.x > 25) {
            my.sprite.body.x -=9;
        } 

        else if(this.keyD.isDown && my.sprite.body.x < 775) {
            my.sprite.body.x +=9;
        }

        if(this.keySpace.isDown && (my.sprite.bullet == undefined || my.sprite.bullet.scene == undefined) ) my.sprite.bullet = this.add.sprite(my.sprite.body.x, my.sprite.body.y, "bullet", "effect_shot.png");
        //console.log(my.sprite.bullet)
        if(my.sprite.bullet != undefined) {
            my.sprite.bullet.y -= 10; 
            if(my.sprite.bullet.y <= 0) my.sprite.bullet.destroy(1);
        }
    }

}