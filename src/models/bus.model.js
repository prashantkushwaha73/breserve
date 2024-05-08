import mongoose , {Schema} from "mongoose";

const busSchema = new Schema({
    busNumber:{
        type: Number,
        required: true,
        unique: true,
        index: true
    },
    busName:{
        type: String,
        required: true,
        trim: true,
    },
    routeFrom:{
        type: String,
        required: true,
        trim: true
    },
    routeTo:{
        type: String,
        required: true,
        trim: true
    },
    busType: {
        type: String,
        required: true,
        trim: true
    },
    departure: {
        type: String,
        required: true,
        trim: true
    },
    arrival: {
        type: String,
        required: true,
        trim: true
    },
    totalSeats: {
        type: Number,
        required: true,
    },
    availableSeats: {
        type: Number,
        required: true
    },
    fair: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
})

export const Bus = mongoose.model("Bus",busSchema)