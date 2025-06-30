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
  maxClicks: {
    type: Number,
    default: null,
  },
  expiresAt: {
    type: Date,
    default: null
  },
  expired: {
    type: Boolean,
    default: false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

urlSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const Url = model("Url", urlSchema);

export default Url;
