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


function createTable(model){
    const lista = []
    if (model.lenght>=0){
        for (var i=1; i<model.length;i++){
        var {city} = model[i].city
        var {temp} = model[i].temp
        var {max} = model[i].max
        var {min} = model[i].min
        lista.push({ 'City': city, 'Temp': temp, 
        'Max': max, 'Min':min})
        return lista 
        }
    }

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
            name: 'addCity',
            type: 'input',
            message: message0,

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
    const message2 = 'which city do you want to delete?'
    return inquirer.prompt([
        {
            name: 'deleteCity',
            type: 'input',
            message: message,

        }
    ])
}

function view(model){
    return {
        title: createTitle(),
        table: createTable(model)
    }
}

module.exports = {
    view, 
    mainInput,
    addCity,
    updateCity,
    deleteCity
}
