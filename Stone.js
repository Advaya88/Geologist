class Stone{

    constructor(x,y){

 var options = {
'restitution': 0.8,
'friction': 0.9,
'density': 12

}
 
this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);

    }
    
    display(){

var sto = this.body.position;
var stoneangle = this.body.angle;

push()
translate(sto.x, sto.y);
rotate(stoneangle);
strokeWeight(3);
stroke('white')
fill('black')
rectMode(CENTER)
rect(0, 0, this.width, this.height);
pop()

}
}

