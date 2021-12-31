class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png");
        this.visiblity = 255;
        this.deleted = false;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;

        tint(255, this.visiblity);

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

        if(this.body.speed >= 3){
          this.deleted = true;
        }

        if(this.deleted == true){
          World.remove(world, this.body);
          push();
          this.visiblity -= 5;
          image(this.image, this.body.position.x, this.body.position.y, 30, 40, this.body.angle);
          pop();
        }

        console.log(this.visiblity);
      }
}
