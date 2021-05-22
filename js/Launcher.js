class Launcher{
    constructor(body, pointB){
        var options = {
            bodyA: body,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyA= body; 
        this.pointB= pointB
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly(){
        this.launcher.bodyA= null; 
    }

    attach(){
        this.launcher.bodyA= body;

    }

    display(){
     
        if(this.launcher.bodyA){

            push();

            var pointA= this.launcher.bodyA.position; 
            var pointB= this.pointB

            strokeWeight(4);
            stroke(48,22,8);
            fill("black")
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop(); 
        }
    }
}