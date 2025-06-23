import mongoose, { Schema, model } from "mongoose";

const urlSchema = new Schema({
  fullUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    index: true,
    unique: true,
    required: true,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Url = model("Url", urlSchema);

export default Url;
