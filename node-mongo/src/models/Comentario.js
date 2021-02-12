const { Schema, model } = require('mongoose')

const ComentarioSchema = new Schema({
    nome: {
        type: String
    },
    email: {
        type: String
    },
    msg:{
        type:String
    },
    dia: {
        type: Date,
        default: new Date()
    }
})

const modelo = model("Commentarios", ComentarioSchema)

module.exports = modelo