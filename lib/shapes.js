// Define the base Shape class
class Shape {
  constructor() {
    // Initialize the default color to "black"
    this.color = "black";
  }

  // Method to set the color of the shape
  setColor(color) {
    this.color = color;
  }

  // Placeholder for the render method that should be overridden by child classes
  render() {
    // Throw an error if this method is called directly
    throw new Error("Child class must implement render() method.");
  }
}

// Define the Circle class, which inherits from Shape
class Circle extends Shape {
  constructor(radius = 170) {
    // Call the constructor of the parent class (Shape)
    super();
    // Set the radius of the circle (default value is 50)
    this.radius = radius;
  }

  // Implement the render method for rendering a circle as an SVG
  render(text, textColor) {
    return `
      <svg width="${2 * this.radius}" height="${2 * this.radius}" xmlns="http://www.w3.org/2000/svg">
        <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />
        <text x="${this.radius}" y="${this.radius}" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="80" font-weight="bold">${text}</text>
      </svg>
    `;
  }
}

// Define the Triangle class, which inherits from Shape
class Triangle extends Shape {
  constructor(sideLength = 400) {
    // Call the constructor of the parent class (Shape)
    super();
    // Set the side length of the equilateral triangle (default value is 100)
    this.sideLength = sideLength;
  }

  // Implement the render method for rendering a triangle as an SVG
  render(text, textColor) {
    // Calculate the height of the equilateral triangle
    const height = (Math.sqrt(3) / 2) * this.sideLength;
    return `
      <svg width="${this.sideLength}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,${height} ${this.sideLength},${height} ${this.sideLength / 2},0" fill="${this.color}" />
        <text x="${this.sideLength / 2}" y="${height / 2}" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="70" font-weight="bold">${text}</text>
      </svg>
    `;
  }
}

// Define the Square class, which inherits from Shape
class Square extends Shape {
  constructor(sideLength = 350) {
    // Call the constructor of the parent class (Shape)
    super();
    // Set the side length of the square (default value is 100)
    this.sideLength = sideLength;
  }

  // Implement the render method for rendering a square as an SVG
  render(text, textColor) {
    return `
      <svg width="${this.sideLength}" height="${this.sideLength}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />
        <text x="${this.sideLength / 2}" y="${this.sideLength / 2}" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="80" font-weight="bold">${text}</text>
      </svg>
    `;
  }
}

// Export the Shape, Circle, Triangle, and Square classes for use in other parts of the application
module.exports = { Shape, Circle, Triangle, Square };
