const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const readmePrompt = () => {
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
            type: "input",
            name: "installation",
            message: "Provide a description to installation",
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions or examples for use",
        },
        {
            type: "list",
            name: "license",
            message: "Pick your project's license",
            choices: ["MIT", "Unlicense", "Apache 2.0", "GPL v2"],
        },
        {
            type: "input",
            name: "contribution",
            message: "Who or what contributed on your project?",
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
        },
    ])
        .then((answers) =>  {
            console.log(answers)
            fs.writeFile("exampleReadMe.md", 
            "# **" + answers.title + "**" + "\n" +
            "## Description" + "\n" +
            answers.description + "\n" +
            "## Table of Contents" + "\n" +
            "* [Installation](#installation)" + "\n" +
            "* [Usage](#usage)" + "\n" +
            "* [License](#license)" + "\n" + 
            "* [Contribution](#contribution)" + "\n" +
            "* [Questions](#questions)" + "\n" +
            "## Installation" + "\n" +
            answers.installation + "\n" +
            "## Usage" + "\n" +
            answers.usage + "\n" +
            "## License" + "\n" + 
            answers.license + "\n" +
            "## Contribution" + "\n" +
            answers.contribution + "\n" +
            "## Questions" + "\n" +
            "If you have any questions in regards to this project please don't be afraid to contact me!" + "\n" +
            "You can reach me at my GitHub: https://github.com/" + answers.github + "\n" +
            "or reach me at my email: " + answers.email,

            
            
            
            
            err => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Successful appended");
                }
            });
        });
};


// function to write README file
//fs.writeToFile("README.md", generateMarkdown, err => {
//if (err) {
//console.log(err);
//} else {
//console.log("Successful appended");
//}
//);



// function call to initialize program
readmePrompt()
    //.then(contentOptions => {
    //    return generateMarkdown(contentOptions);
    //})
    .catch(err => {
        console.log(err);
    });



// array of questions for user
//const questions = [
//
//];
//
//// function to write README file
//function writeToFile(fileName, data) {
//}
//
//// function to initialize program
//function init() {
//
//}
//
//// function call to initialize program
//init();
