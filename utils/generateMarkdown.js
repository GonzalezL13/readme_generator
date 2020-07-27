const fs = require("fs");

// function to generate markdown for README
const generateMarkdown = res => {
  return `# ${res.title}

`;

}


module.exports = generateMarkdown;
