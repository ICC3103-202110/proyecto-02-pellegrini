
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



module.exports = {
    addingName,
    createRow,
    addInfo
 }