class Paper{
    constructor(x,y,radius){
        var options={
            'isStatic':false,
            'restitution':0.3,
            'friction':0.2,
            'density':1.2
        }
        this.x = x;
        this.y = y;
       this.radius = radius;
        
        this.image = loadImage('paper.png')
    
    
    this.paper = Bodies.circle(this.x,this.y,this.radius,options)

    World.add(world,this.paper);
}
display()
{
    var posPaper = this.paper.position;
    //imageMode(CENTER)
    //image(this.image,posPaper.x,posPaper.y,20,20)
    ellipseMode(RADIUS)
    ellipse(posPaper.x,posPaper.y,this.radius,this.radius)
}
}

