import { Schema, model } from "mongoose";

const asistenciaSchema = new Schema({
    codigo: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    cedula: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    },
    descripcion: {
        type: String,        
        trim: true
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Asistencia', asistenciaSchema);