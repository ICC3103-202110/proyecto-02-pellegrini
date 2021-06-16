const { mainInput, addCity, updateCity, deleteCity } = require("./view");


async function update (action,model){
    if (action.Main === 'Add City'){
        input1 = await addCity(model)
        const updatedModel= model;
        updatedModel.push({city: input1, temp: temp1, max: max1, min: min1})
        return updatedModel
    }
    else if (action.Main === 'Update City'){
        input2 = await updateCity(model)
        const updatedModel= model;
        updatedModel.push({city: input1, temp: temp1, max: max1, min: min1})
        return updatedModel
    }
    else if (action.Main === 'Delete City'){
        input3 = await deleteCity(model)
        const updatedModel= model;
        const index= model.city.indexOf(input3);
        updatedModel.splice(index,1);
        return updatedModel;
    }    
}
    
module.exports = {
    update
}