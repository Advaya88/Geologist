class Iron{

    constructor(x,y){

 var options = {
'restitution': 0.8,
'friction': 3,
'density': 30

}
 
this.body = Bodies.rectangle(x,y,100,50,options);
        this.width = 100;
        this.height = 50;
        World.add(world,this.body);

    }
    
    display(){

var ion = this.body.position;
var ironangle = this.body.angle;

push()
translate(ion.x, ion.y);
rotate(ironangle);
strokeWeight(3);
stroke('white');
fill('red');
rectMode(CENTER)
rect(0, 0, this.width, this.height);
pop()

}
}

