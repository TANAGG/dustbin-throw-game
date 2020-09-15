class Ball {
    constructor(x, y) {
      var options = {
         isSatic: false,
         restitution: 0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x, y,20,options);
      this.radius = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("white")
      fill("red");
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
  };

  