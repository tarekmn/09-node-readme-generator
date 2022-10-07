// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT' || license === 'ISC') {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})
    `
  } else if (license === "MPL 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
    `
  } else if (license === "IPL 1.0") {
    return ` [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
`} else {
    return ''
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  return `
${renderLicenseBadge(data.license)}

# ${data.title}\n
## Description
${data.description} \n
## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [FAQ](#questions)

## Installation
${data.install} \n
## Usage
${data.usage} \n
## License
${data.license} \n
## How to Contribute
${data.guidelines} \n
## Tests
${data.test} \n

## Questions
GitHub username: [${data.username}](https://github.com/${data.username})\n

Reach me with additional questions at ${data.email}. Thank you! \n
  
   



`;
}

module.exports = generateMarkdown;
