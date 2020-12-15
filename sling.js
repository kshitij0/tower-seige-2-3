class Rope{
    constructor(bodyA,pointB){

        var ops={
            bodyA:bodyA,
            pointB:pointB,
            length:60,
            stiffness:0.04
            
        }
        this.pointB=pointB
        this.sling=Constraint.create(ops)
        World.add(world,this.sling)

    }
    detach(){
        this.sling.bodyA=null
    }

    attach(abc){
        this.sling.bodyA=abc
    }
    
    display(){
        
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position
        var pointB=this.pointB
        push()
        strokeWeight(7)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()

        }
    }


}