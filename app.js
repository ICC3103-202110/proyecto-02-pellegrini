const {update} = require('./update')
const {view} = require('./view')
const {model} = require('./model')
const prompt = require('prompt-sync')({sigint: true})
const {mainInput, updateCity, addCity, deleteCity} = require('./view')
const {printTable} = require('console-table-printer')



async function app(state,update,view){
    while(true){
        const {model,currentView} = state
        const {title, table} = currentView
        console.clear()
        console.log(title)
        printTable(table)
        const action = await mainInput
        const updated = update(action,model)
        state = {
            ...state,
            model: updated,
            currentView: view(updatedModel)    
            }
        }
    }
module.exports = {
    app
}