// Import the classes you want to test
const { Circle, Triangle, Square } = require('./lib/shapes.js');

// Describe a test suite for the Circle class
describe('Circle', () => {
  // Test case for the Circle class
  test('Circle should render correctly', () => {
    // Create an instance of the Circle class
    const circle = new Circle();

    // Test that the render method returns a string
    expect(typeof circle.render()).toBe('string');
  });
});

// Describe a test suite for the Triangle class
describe('Triangle', () => {
  // Test case for the Triangle class
  test('Triangle should render correctly', () => {
    // Create an instance of the Triangle class
    const triangle = new Triangle();

    // Test that the render method returns a string
    expect(typeof triangle.render()).toBe('string');
  });
});

// Describe a test suite for the Square class
describe('Square', () => {
  // Test case for the Square class
  test('Square should render correctly', () => {
    // Create an instance of the Square class
    const square = new Square();

    // Test that the render method returns a string
    expect(typeof square.render()).toBe('string');
  });
});
