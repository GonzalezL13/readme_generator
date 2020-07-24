const inquirer = require("inquirer");

// array of questions for user
const promptQuestions = () => {
    return inquirer.prompt([
       {
            type: "input",
            name: "title",
            message: "What is the title of your Project? (Required)",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter a title!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description of your project (Required)",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("Please describe your project!");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "tableOfContent",
            message: "Would you like a table of contents?",
            default: true
        },

    ]);
};



// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
promptQuestions();
