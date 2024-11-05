var button;

function setup() {
    createCanvas(900, 600);
    button = new Button();
}

function draw() {
    background(125);
    button.draw();

}

function mousePressed() {
    button.flick(mouseX, mouseY);
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
        if (this.state==true) 
            {
                fill(255);
            } else {
                fill(0);
            }
        
            rect(this.locX, this.locY, this.w, this.h);
    }

    flick(x, y) {
        if (x > this.locX && x < this.locX + this.w && 
            y > this.locY && y < this.locY + this.h)
            {
                this.state = !this.state;
            }
    }
}