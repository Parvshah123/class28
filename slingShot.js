class slingShot{
  constructor(bodyA,pointB){
      var Option = {
          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.04,
          length:10
      }
      //redBall--thread -- string--blueBall
      this.pointB = pointB;
      this.chain = Constraint.create(Option);
      World.add(world,this.chain);
  }
  fly(){
     this.chain.bodyA = null;

  }
  display(){
      if(this.chain.bodyA){
      var pointA = this.chain.bodyA.position
      var pointB = this.pointB;
      strokeWeight(6);
      //line(x1, y1, x2, y2)
      //x1,y1-starting point
      //x2, y2-ending point
      line(pointA.x,pointA.y,pointB.x,pointB.y);
      }
  }

}