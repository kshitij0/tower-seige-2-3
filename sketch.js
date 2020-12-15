const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ball,constrain,surface1,surface2,box1,get,getj
var dnt,hr,back,bg

function preload(){
  bgchange()
}


function setup() {
  createCanvas(1600,900);
  engine=Engine.create()

  world=engine.world
  
  ball=new Box(50,400)

  constrain=new Rope(ball.body,{x:80,y:400})

  surface1=new Ground(500,600,450,30)
  surface2=new Ground(1050,400,400,30)

  box1=new Boxes(400,550)
  box2=new Boxes(450,550)
  box3=new Boxes(500,550)
  box4=new Boxes(550,550)
  box5=new Boxes(600,550)
  box6=new Boxes(450,500)
  box7=new Boxes(500,500)
  box8=new Boxes(550,500)
  box9=new Boxes(480,450)
  box10=new Boxes(530,450)
  box11=new Boxes(510,400)

  box12=new Boxes(950,350)
  box13=new Boxes(1000,350)
  box14=new Boxes(1050,350)
  box15=new Boxes(1100,350)
  box16=new Boxes(1150,350)
  box17=new Boxes(1000,300)
  box18=new Boxes(1050,300)
  box19=new Boxes(1100,300)
  box20=new Boxes(1030,250)
  box21=new Boxes(1080,250)
  box22=new Boxes(1050,200)

 

  
 




  

}

function draw() {
  
  if(back){
    background(back)

  }

  Engine.update(engine)
  
ball.display()

constrain.display()

surface1.display()
surface2.display()

box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()

box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
box20.display()
box21.display()
box22.display()



}
function mouseDragged(){
	
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
    
  }
  
  function mouseReleased(){
    constrain.detach()
  }

  function keyPressed(){
    if(keyCode===32){
      constrain.attach(ball.body)
    }
  }
  async function bgchange(){
    get=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    getj=await get.json()
    dnt=getj.datetime
    
    hr=dnt.slice(11,13)
    console.log(hr)
    if(hr>06&&hr<18){
     bg="download.jpg"
      
    }
    else{
      bg="images.jpg"
    }
    back=loadImage(bg)

  }