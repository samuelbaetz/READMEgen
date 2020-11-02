const inquirer = require('inquirer')
const axios = require('axios')
const fs = require('fs');

async function main() {

const username = await inquirer.prompt([
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


])



const get = await axios.get("http://api.github.com/users/" + username.username)
.then(function (response) {
    // console.log(response)
    console.log("Name: " + response.data.name)
    console.log("Email: " + response.data.email)
    console.log("Public Repos: " + response.data.public_repos)
    
    
})
.catch(function(error) {
    console.log(error)
})

}

main()
