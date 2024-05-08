import mongoose , {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const bookingSchema = new Schema({
    bookingId:{
        type: Number,
        required: true,
        unique: true,
        index: true
    },
    customerId:{
        type: Schema.Types.ObjectId,
        ref: "Customer"
    },
    busNumber:{
        type: Schema.Types.ObjectId,
        ref: "Bus"
    },
    seatFrom:{
        type: Number,
        required: true,
        trim: true
    },
    seatTo: {
        type: Number,
        required: true,
        trim: true
    },
    status: {
        type: Number,
        required: true,
        trim: true
    }
},
{
    timestamps: true
})

bookingSchema.plugin(mongooseAggregatePaginate)

export const Booking = mongoose.model("Booking",bookingSchema)