class Attach
{

constructor(a,b)
{

var options=
{
bodyA:a,
pointB:b,

}
this.body=constraint.create(options)
this.pointB=b
World.add(myworld,this.body)
}

display()
{
var posa = this.body.bodyA.position
var posb = this.pointB

strokeWeight(3)
line(posa.x,posa.y,posb.x,posb.y)





}


}

















