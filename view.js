const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const prompt = require('prompt-sync')
const {printTable} = require('console-table-printer')

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

function createTable(info){
    const {location,temp, max, min } = info
    return [{
        "City": location,
        "Temp" : temp,
        "Max": max,
        "Min": min
    }]
    }


function mainInput(){
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

function addCity(){
    const message0 = 'Enter location'
    return inquirer.prompt([
        {
            name: 'addCity',
            type: 'input',
            message: message0,

        }
    ])
}

function updateCity(names){
    const message1 = 'Select city to update'
    return inquirer.prompt([
        {
            name: 'updateCity',
            type: 'list',
            message: message1,
            choices : names

        }
    ])
}

function deleteCity(names){
    const message2 = 'which city do you want to delete?'
    return inquirer.prompt([
        {
            name: 'deleteCity',
            type: 'list',
            message: message2,
            choices : names

        }
    ])
}

function view(info){
    return {
        title: createTitle(),
        table: createTable(info)
    }
}

module.exports = {
    view, 
    mainInput,
    addCity,
    updateCity,
    deleteCity
}
