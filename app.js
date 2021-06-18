const {updatingCity,addingCity} = require('./update')
const {mainInput, updateCity, addCity, deleteCity,view} = require('./view')
const {printTable} = require('console-table-printer')


let info = []
let names = []

async function app(info,names,view){
    while(true){
        console.clear()
        const {title,table} = view(info)
        console.log(title)
        printTable(table)
        const action = await mainInput
        const chosen = action.Main
        if (chosen === 'addCity'){
            selection = await addCity
            selected = selection.addCity
            addingCity(names,selected)
        }
           
        else if (chosen === 'updateCity'){
            selection = await updateCity
            selected = selection.deleteCity
            updatedInfo = updatingCity(info,names,selected)
            app(updatedInfo,names,view)
        }
        else if (chosen === 'deleteCity'){
            selection = await deleteCity
            selected = selection.updateCity
            const updatedInfo= info; 
            const updatedNames = names; 
            const index= names.indexOf(selected);
            updatedInfo.splice(index,1);
            updatedNames.splice(index,1)
            app(updatedInfo,updatedNames,view)
        }
    }
}

app(info,names,view)