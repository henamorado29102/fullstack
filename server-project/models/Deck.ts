import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const DeckShema = new Schema({  
  title: String
});

const DeckModel = mongoose.model("Deck", DeckShema)

export default DeckModel