class Paper
{
   constructor(x,y,r)
   {
      var options=
      {
         isStatic:false,
         restitution:0.3,
         friction:0,
         density:1.2
      } 
     this.x=x
     this.y=y
     this.r=r
     this.body=Bodies.circle(this.x,this.y,this.r,options)
     this.image=loadImage("paper.png")
      World.add(world,this.body)
   }

   display()
   {
      var p= this.body.position
      push();
      translate(p.x,p.y,this.r)
      //ellipse(0,0,this.r,this.r)
      imageMode(CENTER) 
      image(this.image,0,0,55,55)
      pop();
   }
}