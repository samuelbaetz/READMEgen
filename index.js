const inquirer = require('inquirer')
const axios = require('axios')
const fs = require('fs');
const util = require('util')
const chalk = require('chalk');

async function main() {

const questions = [
    {
        type: 'input',
        message: 'Yo, whats your github username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'project'

    },
    {
        type: 'list',
        message: 'Select a license for your Project',
        choices: ['GNU_AGPLv3', 'GNU_GPLv3', 'GNU_LGPLv3', 'Mozilla_Public_License_2.0', 'Apache_License_2.0', 'MIT_License', 'None'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Give a brief descrition of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What dependencies does your project have?',
        name: 'depend'
    },
    {
        type: 'input',
        message: 'Tell me how a user would use your application',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'How do I contribute to your project?',
        name: 'contrib'
    },
    {
        type: 'input',
        message: 'How do I test this application?',
        name: 'test'
    }


]

const rep = await inquirer.prompt(questions)
console.log(chalk.green("Project: " + rep.project))
console.log(chalk.green("License: " + rep.license))
console.log(chalk.green("Description: " + rep.description))
console.log(chalk.green("Usage: " + rep.usage))
console.log(chalk.green("Contribute: " + rep.contrib))
console.log(chalk.green("Testing: " + rep.test))
console.log(chalk.green("Dependencies: " + rep.depend))
var readme=
`# ${rep.project}

# Table of Contents
1. [Description](#description)
2. [Dependancies](#dependancies)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Testing](#testing)


![License](https://img.shields.io/badge/License-${rep.license}-blue) 


## Description
${rep.description}

## Dependancies
${rep.depend}


## Usage
${rep.usage}


## Contributing 
${rep.contrib}


## Testing
${rep.test}


`



const get = await axios.get("http://api.github.com/users/" + rep.username)
.then(function (response) {
    // console.log(response)
    console.log("Thanks! " + response.data.name)
    
    console.log("Public Repos: " + response.data.public_repos)
    
    
})
.catch(function(error) {
    console.log(error)

})
function writeread() {
 fs.writeFileSync('README.md', readme, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Sick dude, your README had been generated")
    });
}

 writeread()



}

main()
