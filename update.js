
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



module.exports = {
    addingName,
    addInfo,
    connectApi
 }