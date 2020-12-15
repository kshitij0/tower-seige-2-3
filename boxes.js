class Boxes{
    constructor(x,y){
        var ops={
            'isStatic':false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body=Bodies.rectangle(x,y,50,50,ops)
        this.a=255
        World.add(world,this.body)
    }
    display(){

        if(this.body.speed<3){
            var pos=this.body.position;
            var angle=this.body.angle
           
            push();
            translate(pos.x, pos.y);
            rotate(angle)
           rectMode(CENTER)
            rect(0,0,50,50)
            
            pop()

        }
        else{
            World.remove(world,this.body)
            tint(255,this.a)
            this.a=this.a-5

        }
      

    }
}