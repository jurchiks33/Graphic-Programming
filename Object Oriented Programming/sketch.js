var button;
var button2;

function setup() 
{
    createCanvas(900, 600);
    button = new Button(200, 200, 200, 100, "Button 1");
    button2 = new Button(100, 100, 150, 75, "Button 2");
}

function draw() 
{
    background(245);
    button.draw();
    button2.draw();
}

function mousePressed() 
{
    button.flick(mouseX, mouseY);
    button2.flick(mouseX, mouseY);
}

class Button 
{
    constructor(locX, locY, w, h, label) 
    {
        this.state = false;
        this.locX = locX;
        this.locY = locY;
        this.w = w;
        this.h = h;
        this.label = label;
        this.glowIntensity = 0;
    }

    draw() 
    {
        // Background shadow effect
        noStroke();
        fill(0, 0, 0, 30);
        rect(this.locX + 4, this.locY + 4, this.w, this.h, 20);

        // Button color with glossy effect
        let baseColor = this.state ? color(0, 150, 255) : color(100, 100, 100);
        let glossyColor = this.state ? color(0, 200, 255, 150) : color(255, 255, 255, 80);
        
        fill(baseColor);
        rect(this.locX, this.locY, this.w, this.h, 20); 
        fill(glossyColor);
        rect(this.locX, this.locY, this.w, this.h / 2, 20, 20, 0, 0); // Top gloss effect
        
        // Glow animation effect around button
        if (this.state) 
        {
            this.glowIntensity = lerp(this.glowIntensity, 20, 0.2);
        } 
        else 
        {
            this.glowIntensity = lerp(this.glowIntensity, 0, 0.2);
        }
        
        stroke(0, 150, 255, this.glowIntensity * 5); // Adjustable glow
        strokeWeight(this.glowIntensity);
        noFill();
        rect(this.locX, this.locY, this.w, this.h, 20);

        // Text styling
        noStroke();
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(this.h / 3);
        text(this.label, this.locX + this.w / 2, this.locY + this.h / 2);
    }

    flick(x, y) 
    {
        if (x > this.locX && x < this.locX + this.w &&
            y > this.locY && y < this.locY + this.h) 
        {
            this.state = !this.state;
        }
    }
}
