const { mainInput, addCity, updateCity, deleteCity } = require("./view");


function update (action,selection,model){
    // sumando una ciudad con numeros aleatorios 
    if (action === 'Add City'){
        const updatedModel= model;
        var max1= Math.floor(Math.random()*30)+10
        var min1= Math.floor(Math.random()*10)
        var temp1 = (max1 + min1)/2 
        updatedModel.push({city: selection, temp: temp1, max: max1, min: min1})
        return updatedModel
    }
    else if (action === 'Update City'){
        const updatedModel= model;
        var max1= Math.floor(Math.random()*30)+10
        var min1= Math.floor(Math.random()*10)
        var temp1 = (max1 + min1)/2 
        updatedModel.push({city: selection, temp: temp1, max: max1, min: min1})
        return updatedModel
    }
    else if (action === 'Delete City'){
        const updatedModel= model;
        const index= model.city.indexOf(selection);
        updatedModel.splice(index,1);
        return updatedModel;
    }    
}
    
module.exports = {
    update
}