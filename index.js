const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes.js");

// Function to generate the logo based on user input.
async function generateLogo() {
  try {
    // Inquirer to prompt the user for input (text, text color, shape, shape color).
    const userInput = await inquirer.prompt([
      {
        type: "input",
        name: "text",
        message: "Enter up to three characters (text):",
        validate: (input) => {
          // Validate the input to ensure it contains up to three characters
          return input.length <= 3;
        },
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter text color (color keyword or hexadecimal number):",
      },
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
    ]);

    // Determine the selected shape class based on user input.
    let shapeClass;
    switch (userInput.shapeType) {
      case "Circle":
        shapeClass = Circle;
        break;
      case "Triangle":
        shapeClass = Triangle;
        break;
      case "Square":
        shapeClass = Square;
        break;
      default:
        throw new Error("Invalid shape type.");
    }

    // Create an instance of the selected shape class and set its properties.
    const shape = new shapeClass();
    shape.setColor(userInput.shapeColor);

    // Generate the SVG logo string based on user choices.
    const logoSVG = shape.render(userInput.text, userInput.textColor);

    // Write the SVG string to a file named "logo.svg".
    fs.writeFileSync("logo.svg", logoSVG);

    // Print "Generated logo.svg" to the console.
    console.log("Generated logo.svg");
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

// Call the generateLogo function to start the application.
generateLogo();
