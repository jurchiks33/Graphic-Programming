var button;
var button2;

function setup() {
    createCanvas(900, 600);
    button = new Button(200, 200, 200, 100);
    button2 = new Button(100, 100, 50, 50);
}

function draw() {
    background(125);
    button.draw();
    button2.draw();

}

function mousePressed() {
    button.flick(mouseX, mouseY);
    button2.flick(mouseX, mouseY);
}

class Button 
{
    constructor(locX, locY, w, h) 
    {
        this.state = false;
        this.locX = locX;
        this.locY = locY;
        this.w = w;
        this.h = h;
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