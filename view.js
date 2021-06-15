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