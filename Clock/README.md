
# Analog Clock in p5.js

This project is a visually styled analog clock created using the **p5.js** library. The clock features smooth hands for hours, minutes, and seconds, as well as Roman numerals for the hour markers. The design includes a gradient background and an elegant appearance.

## Features

- **Hour, Minute, and Second Hands**: The clock includes moving hands that update based on the current time.
  - The second hand is red.
  - The minute hand is white.
  - The hour hand is gold.
  
- **Roman Numerals**: The hour markers are represented by Roman numerals placed around the face of the clock.
  - Numbers: XII, I, II, III, IV, V, VI, VII, VIII, IX, X, XI.
  
- **Radial Gradient Background**: The clock face has a gradient effect, transitioning from a light color at the center to a darker color at the edges, giving the clock a polished look.

- **Responsive to Current Time**: The hands update in real-time based on the current hour, minute, and second.

## Installation

1. **Clone the Repository**:

git clone <https://github.com/jurchiks33/Graphic-Programming/tree/main/Clock>


2. **Navigate to the Project Directory**:

cd <your-project-directory>


3. **Open the HTML File**:
- If you have an `index.html` file to load the p5.js sketch, open it in your browser.
- Otherwise, create a new `index.html` file and include the following basic structure:

<!DOCTYPE html>
<html>
<head>
    <title>Analog Clock</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
    <script src="clock.js"></script> <!-- Reference your clock script here -->
</head>
<body>
</body>
</html>

    Run the Project:
        Open index.html in any web browser to view the clock.

Usage

The clock will automatically display the current time, with Roman numerals marking the hours. The hands will rotate in real time to reflect the passing seconds, minutes, and hours.
Customization

You can further modify the clock design by changing:

    Colors of the hands.
    Position of the Roman numerals.
    Background gradient.

To change the appearance, edit the values in the draw() function within the clock.js file.