import mongoose, { Schema } from 'mongoose';

// create a schema for outings/description
const OutingSchema = new Schema({
  title: String,
  description: String,
});

// create model class
const Outing = mongoose.model('Outing', OutingSchema);

export default Outing;