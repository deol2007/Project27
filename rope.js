class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offset}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        if (this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    fly() {
        this.rope.bodyA = null
    }
}