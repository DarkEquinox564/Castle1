class Triangle{
    constructor(x,y,sides,radius){
        this.body = Bodies.polygon(x,y,sides,radius);
        this.body.position.x = x
        this.body.position.y = y
        this.body.sides = sides
        this.body.radius = radius

        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        polygon(0,0,sides,radius);
        
        pop();
      }
}