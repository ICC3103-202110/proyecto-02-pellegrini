const { mainInput, addCity, updateCity, deleteCity } = require("./view");

function addCityUpdate(model){
    input1 = await addCity(model)
    const updatedModel= model.cities;
    updatedModel.push({city: input1, temp: temp1, max: max1, min: min1})
    updatedModel.names.push(input1)
    return updatedModel;
}
function updateCityUpdate(model){
    input2 = await updateCity(model)
    const updatedModel= model.cities;
    updatedModel.push({city: input1, temp: temp1, max: max1, min: min1})
    return 
}

function deleteCityUpdate(model){
    input3 = await deleteCity(model)
    const updatedModel= model.cities;
    const index= model.names.indexOf(input3);
    temporalModel.cities.splice(index,1);
    temporalModel.names.splice(index,1);
    return temporalModel;
}

function update (action,model){
    if (action.Main === 'Add City'){
        return addCityUpdate
    }
    if (action.Main === 'Update City'){
        return updateCityUpdate //DEFINIR ESTA FUNCION
    }
    if (action.Main === 'Delete City'){
        return deleteCityUpdate // DEFINIR ESTA FUNCION 
    }    

    
    }
module.exports = {
    update
}