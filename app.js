const {addInfo,addingName,connectApi} = require('./update')
const {mainInput, updateCity, addCity, deleteCity,view} = require('./view')
const {printTable} = require('console-table-printer')

let names = []
let info = []
async function app(names,info,view){
    while(true){
        const {title,table} = view(info)
        console.clear()
        console.log(title)
        printTable(table)
        const action = await mainInput
        const chosen = action.Main
        if (chosen === 'addCity'){
            selection = await addCity
            selected = selection.addCity
            const newNamesList = addingName(names,selected)
            conInfo = connectApi(selected,'6fa5c94be7a25d05a112fea1ae1bae13')
            x = await conInfo.then((response) => {
                temp1 = response.data.main.temp
                max1 = response.data.main.temp_max
                min1 = response.data.main.temp_min
                error = ""
            })
            .catch(function () {
              error = 'error in finding city'
              console.log(error);
            })
            if (error != 'error in finding city'){
                updatedModel = addInfo(info,selected,temp1,max1,min1)  
            }


            return updatedModel, newNamesList;
            
        }
            
        else if (chosen === 'updateCity'){
            selection = await deleteCity
            selected = selection.deleteCity
            const updatedModel= info;
            const index= names.indexOf(selected);
            conInfo = connectApi(selected,'6fa5c94be7a25d05a112fea1ae1bae13')
            x = await conInfo.then((response) => {
                temp1 = response.data.main.temp
                max1 = response.data.main.temp_max
                min1 = response.data.main.temp_min
                error = ""
                })
            .catch(function () {
                error = 'error in finding city'
                console.log(error);
            })
            if (error === 'error in finding city'){
                updatedModel[index] = info[index]  
            }
            else if (error != 'error in finding city'){
                const index= names.indexOf(selected);
                updatedModel.splice(index,1);
                updatedNames.splice(index,1)
                updatedModel[index] = addInfo(info,selected,temp1,max1,min1)
            }



        return updatedModel
        }  
        else if (chosen === 'deleteCity'){
            selection = await updateCity
            selected = selection.updateCity
            const updatedModel= info; 
            const updatedNames = names; 
            const index= names.indexOf(selected);
            updatedModel.splice(index,1);
            updatedNames.splice(index,1)
            return updatedModel, updatedNames
        }
    }
}

app(names,info,view)