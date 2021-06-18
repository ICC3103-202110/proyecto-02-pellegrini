const {update} = require('./update')
const {view} = require('./view')
const {model} = require('./model')
const prompt = require('prompt-sync')
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
        if (action.Main === 'addCity'){
            selection = await addCity
            selected = selection.addCity
            const updated = update(action.Main,selected,model)
                state = {
                ...state,
                model: updated,
                currentView: view(updatedModel)    
                }
        }
        else if (action.Main === 'deleteCity'){
            selection = await deleteCity
            selected = selection.deleteCity
            const updated = update(action.Main,selected,model)
                state = {
                ...state,
                model: updated,
                currentView: view(updatedModel)    
            }
        }
        else if (action.Main === 'updateCity'){
            selection = await updateCity
            selected = selection.updateCity
            const updated = update(action.Main,selection,model)
            state = {
            ...state,
            model: updated,
            currentView: view(updatedModel)    
            }
        }

    }
}
module.exports = {
    app
}