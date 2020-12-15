class Box{
constructor(x, y) {
  var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':0.2
  }
  this.body = Bodies.circle(x,y,30,options)
  World.add(world, this.body);
}
display(){
  var pos=this.body.position
  push();
  translate(this.body.position.x, this.body.position.y);
  ellipseMode(RADIUS)
 ellipse(0,0,30)
  pop();
}
}