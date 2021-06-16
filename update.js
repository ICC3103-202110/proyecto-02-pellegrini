const { mainInput, addCity, updateCity, deleteCity } = require("./view");


async function update (action,model){
    if (action.Main === 'Add City'){
        input1 = await addCity(model)
        const updatedModel= model.cities;
        updatedModel.push({city: input1, temp: temp1, max: max1, min: min1})
        updatedModel.names.push(input1)
        return updatedModel
    }
    if (action.Main === 'Update City'){
        input2 = await updateCity(model)
        const updatedModel= model.cities;
        updatedModel.push({city: input1, temp: temp1, max: max1, min: min1})
        return updatedModel
    }
    }
    if (action.Main === 'Delete City'){
        input3 = await deleteCity(model)
        const updatedModel= model.cities;
        const index= model.names.indexOf(input3);
        temporalModel.cities.splice(index,1);
        temporalModel.names.splice(index,1);
        return updatedModel;
    }    

    
module.exports = {
    update
}