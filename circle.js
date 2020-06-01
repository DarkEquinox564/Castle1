class Circle{
    constructor(x,y,di){
        this.body = Bodies.circle(x,y,di);
        this.body.position.x = x;
        this.body.position.y = y;
        this.body.di = di;
    }
    display(){
        circle(this.body.position.x,this.body.position.y,this.body.di);
    }
    
}