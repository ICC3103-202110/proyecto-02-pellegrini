const { mainInput, addCity, updateCity, deleteCity } = require("./view");

function addCityUpdate(model){
    input1 = addCity.addCity
    const updatedModel= model.cities;
    updatedModel.push({city: input1, temp: temp1, max: max1, min: min1})
    updatedModel.names.push(input1)
    return updatedModel;
}
function updateCityUpdate(model){
    input2 = updateCity.updateCity
    const updatedModel= model.cities;
    updatedModel.push({city: input1, temp: temp1, max: max1, min: min1})
    return 
}

function deleteCityUpdate(model){
    input3 = deleteCity.deleteCity
    const updatedModel= model;
    const index=model.city.indexOf(input3);
    temporalModel.cities.splice(index,1);
    temporalModel.names.splice(index,1);
    return temporalModel;
}

function update (input,model){
    if (mainInput.Main === 'Add City'){
        return addCityUpdate
    }
    if (mainInput.Main === 'Update City'){
        return updateCityUpdate //DEFINIR ESTA FUNCION
    }
    if (mainInput.Main === 'Delete City'){
        return deleteCityUpdate // DEFINIR ESTA FUNCION 
    }    

    
    }
module.exports = {
    update
}