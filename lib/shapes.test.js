// shapes.test.js

const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./shapes");

// Mock the inquirer prompt function to provide user input for testing
jest.mock("inquirer");

describe("Shape Classes", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a Circle with user input", async () => {
    // Mock user input for Circle
    inquirer.prompt.mockResolvedValueOnce({
      shapeType: "Circle",
      shapeColor: "blue",
      text: "C",
      textColor: "white",
    });

    const shape = await createShape();
    expect(shape instanceof Circle).toBeTruthy();
    expect(shape.color).toBe("blue");
    expect(shape.radius).toBe(170);
    expect(shape.render("C", "white")).toMatchSnapshot();
  });

  it("should create a Triangle with user input", async () => {
    // Mock user input for Triangle
    inquirer.prompt.mockResolvedValueOnce({
      shapeType: "Triangle",
      shapeColor: "green",
      text: "T",
      textColor: "red",
    });

    const shape = await createShape();
    expect(shape instanceof Triangle).toBeTruthy();
    expect(shape.color).toBe("green");
    expect(shape.sideLength).toBe(400);
    expect(shape.render("T", "red")).toMatchSnapshot();
  });

  it("should create a Square with user input", async () => {
    // Mock user input for Square
    inquirer.prompt.mockResolvedValueOnce({
      shapeType: "Square",
      shapeColor: "yellow",
      text: "S",
      textColor: "black",
    });

    const shape = await createShape();
    expect(shape instanceof Square).toBeTruthy();
    expect(shape.color).toBe("yellow");
    expect(shape.sideLength).toBe(350);
    expect(shape.render("S", "black")).toMatchSnapshot();
  });
});

// Function to create a shape based on user input
async function createShape() {
  const userInput = await inquirer.prompt([
    {
      type: "list",
      name: "shapeType",
      message: "Choose a shape:",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter shape color (color keyword or hexadecimal number):",
    },
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters (text):",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter text color (color keyword or hexadecimal number):",
    },
  ]);

  let shape;

  switch (userInput.shapeType) {
    case "Circle":
      shape = new Circle();
      break;
    case "Triangle":
      shape = new Triangle();
      break;
    case "Square":
      shape = new Square();
      break;
    default:
      throw new Error("Invalid shape type.");
  }

  shape.setColor(userInput.shapeColor);

  return shape;
}
