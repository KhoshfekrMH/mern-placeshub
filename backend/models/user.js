import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 6 },
  image: { type: String, required: true },
  places: [{ type: Schema.Types.ObjectId, required: true, ref: "Place" }],
});

userSchema.plugin(uniqueValidator);

export default mongoose.model("User", userSchema);
