const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function createTitle(){
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

function createTable(model){
    const {city} = model
    const {temp} = model
    const {max} = model
    const {min} = model
    return [
        { 'City': city, 'Temp': temp, 
        'Max': max, 'Min':min}
    ]

}

function mainInput(model){
    const message = 'Select action'
    return inquirer.prompt([
        {
            name: 'Main',
            type: 'list',
            message: message,
            choices: ['Add City','Update City','Delete City'],

        }
    ])
}

function addCity(model){
    const message0 = 'Enter location'
    return inquirer.prompt([
        {
            name: 'addcity',
            type: 'input',
            message: message0,
            default: model.city

        }
    ])
}

function updateCity(model){
    const message1 = 'Location?'
    return inquirer.prompt([
        {
            name: 'updateCity',
            type: 'input',
            message: message1,

        }
    ])
}

function deleteCity(model){
    const message2 = ''
}