const {addInfo,createRow,addingName} = require('./update')
const {mainInput, updateCity, addCity, deleteCity} = require('./view')
const {printTable} = require('console-table-printer')
const {initModel} = require('./model')
const {view} = require('./view')

function connectApi(selected,Key){
    api = axios.get('http://api.openweathermap.org/data/2.5/weather?q='+selected+'&appid='+Key+'&units=metric')
    return api
}
let names = initModel.names 
let info = initModel.info
async function app(names,info,view){
    while(true){
        const {table} = view(info)
        const {title} = view(info)
        console.clear()
        console.log(title)
        printTable(table)
        const choice = await mainInput
        const chosen = choice.Main
        if (chosen === 'addCity'){
            selection = await addCity
            selected = selection.addCity
            const updatedModel= info ;
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
            if (error === 'error in finding city'){
                max1r = Math.floor(Math.random()*30)+10
                min1r = Math.floor(Math.random()*max1r)-10
                temp1r = (max1r + min1r)/2 
                row = row(selected,temp1r,max1r,min1r)
                updatedModel = addRow(row)  
            }
            else if (error != 'error in finding city'){
                row = createRow(selected,temp1,max1,min1)
                updatedModel = addInfo(row)  
            }


            return updatedModel, newNamesList;
            app(updatedModel,newNamesList)
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
                max1r = Math.floor(Math.random()*30)+10
                min1r = Math.floor(Math.random()*max1r)-10
                temp1r = (max1r + min1r)/2 
                row = createRow(selected,temp1r,max1r,min1r)
                updatedModel[index] = row  
            }
            else if (error != 'error in finding city'){
                row = row(selected,temp1,max1,min1)
                updatedModel[index] = row 
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