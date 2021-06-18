const{initModel} = require('./model')
const{update} = require('./update')
const{view} = require('./view')
const{app} = require('./app')

const state = {
    info : initModel.info,
    currentView: view(initModel),
    names: initModel.names

}


app(state,update,view);