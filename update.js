const { mainInput, addCity, updateCity, deleteCity } = require("./view");
const {axios} = require('axios')

function addingName(names,city){
    newNames = names.push(city)
    return newNames
}

function createRow(location, temp1, max1, min1){
    row = {'name': location,'temp': temp1, 'max': max1, 'min': min1}
    return row
}
function addInfo(cities,row){
    a = cities
    addedInfo = a.push(row)
    return addedInfo 
}
function connectApi(selected,Key){
    api = axios.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+Key+'&units=metric')
    return api
}


function update (chosen,selected,info,names){
    // sumando una ciudad con numeros aleatorios 
    if (chosen === 'Add City'){
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


        return updatedModel, newNamesList
    }
    else if (chosen === 'Update City'){
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
    else if (action === 'Delete City'){
        const updatedModel= info; 
        const updatedNames = names; 
        const index= names.indexOf(selected);
        updatedModel.splice(index,1);
        updatedNames.splice(index,1)
        return updatedModel, updatedNames
    }
}  

module.exports = {
    update }