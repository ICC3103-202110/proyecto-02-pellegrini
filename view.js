const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.yellow(
        figlet.textSync(
            'Weather app',
            {
            font: 'Star Wars',
            horizontalLayout: "full"
        }
        )
    )
}

console.log(getTitle())