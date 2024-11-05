var button;
var button2;

function setup() {
    createCanvas(900, 600);
    button = new Button(200, 200, 200, 100, "Button 1");
    button2 = new Button(100, 100, 50, 50, "Button 2");
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
        this.label = label;
        this.glowIntensity = 9;
    }

    draw() 
    {
        // shadow effect for a background
        noStroke();
        fill(0, 0, 0, 30);
        rect(this.locX + 4, this.locY+ 4, this.w, this.h, 20);

        // Button color with effect on it
        let baseColor = this.state ? color(0, 150, 250) : color(100, 100, 100);
        let glossyColor = this.state ? color(0, 200, 255, 150) : color(255, 255, 255, 80);

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