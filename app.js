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
        num = names.lenght 
        if (num >0){
            printTable(table)
        }
        choice = await mainInput()
        const chosen = choice.Main 
        if (chosen === 'add City'){
            selection = await addCity()
            selected = selection.addCity
            addingCity(names,selected)
        }
           
        else if (chosen === 'update City'){
            selection = await updateCity(names)
            selected = selection.deleteCity
            updatedInfo = updatingCity(info,names,selected)
            app(updatedInfo,names,view)
        }
        else if (chosen === 'delete City'){
            selection = await deleteCity(names)
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