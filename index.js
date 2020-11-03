const inquirer = require('inquirer')
const axios = require('axios')
const fs = require('fs');
const util = require('util')

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
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'None'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Give a brief descrition of your project.',
        name: 'description'
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
console.log(rep)

var readme=
`# ${rep.project}


###### ${rep.license}


## Description
${rep.description}


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
    console.log("Name: " + response.data.name)
    
    console.log("Public Repos: " + response.data.public_repos)
    
    
})
.catch(function(error) {
    console.log(error)

})
function writeread() {
 fs.writeFileSync('readme.md', readme, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success")
    });
}

 writeread()



}

main()
