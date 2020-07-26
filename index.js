const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require ("./utils/generateMarkdown");

// array of questions for user
const promptProject = () => {
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
        }
    ])
        .then((res) => console.log(res));
};

const promptProjectContents = contentOptions => {
    console.log(`
    ===============
    Content Options
    ===============
    `);

    return inquirer.prompt([
        {
            type: "confirm",
            name: "tableOfContent",
            message: "Would you like a table of contents?",
            default: true
        },
        {
            type: "confirm",
            name: "installation",
            message: "Would you like to include a Installation secion?",
            default: true
        },
        {
            type: "input",
            name: "installInstructions",
            message: "Provide description to installation",
            when: ({ installation }) => installation
        },
        {
            type: "confirm",
            name: "usage",
            message: "Would you like to include Usage section?",
            default: true
        },
        {
            type: "input",
            name: "usageInstructions",
            message: "Provide instructions or examples for use",
            when: ({ usage }) => usage
        },
        {
            type: "confirm",
            name: "license",
            message: "Would you like to include a License section?",
            default: true
        },
        {
            type: "list",
            name: "licenseDesc",
            message: "Pick your project's license",
            choices: ["MIT", "Unlicense", "Apache 2.0", "GPL v2"],
            when: ({ license }) => license
        },
        {
            type: "confirm",
            name: "contribute",
            message: "Has anyone or anything contributed to your project?",
            default: false
        },
        {
            type: "input",
            name: "confirmContribute",
            message: "Who or what contributed?",
            when: ({ contribute }) => contribute
        },
        {
            type: "confirm",
            name: "questions",
            message: "Would you like to include a Questions section?",
            default: true
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
            when: ({ questions }) => questions
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
            when: ({ questions }) => questions
        },
    ])
        .then((response) => console.log(response));
};


// function to write README file
//fs.writeToFile("README.md",
//    "##" + promptProject(titleInput) + "\n",
//)


// function call to initialize program
promptProject()
    .then(promptProjectContents)

