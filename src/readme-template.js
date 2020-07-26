const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your project name?",
      name: "title",
    },
    {
      type: "input",
      message: "Briefly describe your project?",
      name: "description",
    },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "installation",
    },
    {
      type: "input",
      message: "What the purpose of this project?",
      name: "usage",
    },
    {
      type: "list",
      message: "What kind of license should your project have?",
      name: "license",
      choices: ["MIT", "APACHE 2.0", "GLP 3.0", "ISC", "NONE"],
    },
    {
      type: "input",
      message: "Who are the contributors?",
      name: "contributing",
    },
    {
      type: "input",
      message: "What command should be run to run the test?",
      name: "test",
    },
    {
      type: "input",
      message: "Do you have any question?",
      name: "question",
    },
  ])
  .then((res) => {
    console.log(res);

    fs.writeFile(
      "README.md",
      "\n" +
        "## Title:" +
        "\n" +
        res.title +
        "\n" +
        "## Description:" +
        "\n" +
        res.description +
        "\n" +
        "## Table of Contents:" +
        "\n" +
        "## Installation:" +
        "\n" +
        res.installation +
        "\n" +
        "## Usage:" +
        "\n" +
        res.usage +
        "\n" +
        "## License:" +
        "\n" +
        res.license +
        "\n" +
        "## Contributing:" +
        "\n" +
        res.contributing +
        "\n" +
        "## Test:" +
        "\n" +
        res.test +
        "\n" +
        "## Questions:" +
        "\n" +
        res.question +
        "\n",
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Successful appended");
        }
      }
    );
  });