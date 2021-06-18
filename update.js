
const {axios} = require('axios')

function connectApi(selected,Key){
    api = axios.get('http://api.openweathermap.org/data/2.5/weather?q='+selected+'&appid='+Key+'&units=metric')
    return api
}

function addingName(names,city){
    newNames = names.push(city)
    return newNames
}

function addInfo(info,selected, temp1, max1, min1){
    a = info
    row = {'name': selected,'temp': temp1, 'max': max1, 'min': min1}
    addedInfo = a.push(row)
    return addedInfo 
}

async function addingCity(names,selected){
        const updatedNames = addingName(names,selected)
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
            .then (function(){
            if (error != 'error in finding city'){
                updatedInfo = addInfo(info,selected,temp1,max1,min1)  
            }
            app(updatedInfo,updatedNames,view)
        });
}

async function updatingCity(info,names,selected){
            const updatedInfo = info;
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
            .then (function(){
             if (error === 'error in finding city'){
                 updatedInfo[index] = info[index]  
             }
            else if (error != 'error in finding city'){
                const index= names.indexOf(selected);
                updatedInfo.splice(index,1);
                updatedNames = names.splice(index,1)
                updatedInfo[index] = addInfo(info,selected,temp1,max1,min1)
            }
            return updatedInfo
    });
}



module.exports = {
    updatingCity,
    addingCity
 }