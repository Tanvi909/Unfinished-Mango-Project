class ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
	
		this.body=Bodies.rectangle(x, y, width, height , options);
		this.width= width; 
		this.height= height; 
 		World.add(world, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			//fill(128,128,128)
			rect(this.body,0,0,width,height);
			pop();
			
	}

}