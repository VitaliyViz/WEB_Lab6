import mongoose from 'mongoose';

const shipSchema = new mongoose.Schema({
    name: { type: String, required: true },
    weight: { type: Number, required: true },
    passengers: { type: Number, required: true },
    capacity: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
});

const Ship = mongoose.model('Ship', shipSchema);
export default Ship;
