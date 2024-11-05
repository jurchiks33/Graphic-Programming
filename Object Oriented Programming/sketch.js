

function setup() {
    createCanvas(900, 600);
}

function draw() {
    background(125);


}

function mousePressed() {
    if (mouseX > locX && mouseX < locX + w && 
        mouseY > locY && mouseY < locY + h)
        {
            state = !state;
        }
}

class Button 
{
    constructor() 
    {
        this.state = false;
        this.locX = 200;
        this.locY = 200;
        this.w = 200;
        this.h = 100;
    }

    draw() 
    {
        if (state==true) 
            {
                fill(255);
            } else {
                fill(0);
            }
        
            rect(locX, locY, w, h);
    }
}