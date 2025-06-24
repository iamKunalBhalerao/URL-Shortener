import mongoose, { Schema, model } from "mongoose";
import { generateGravatar } from "../utils/generateGravatar";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    avatar: {
      type: String,
      default: function () {
        return generateGravatar(this.email);
      },
    },
  },
  { timestamps: true }
);

// Pre-save middleware to ensure avatar is set
userSchema.pre("save", function (next) {
  if (!this.avatar && this.email) {
    this.avatar = generateGravatar(this.email);
  }
  next();
});

const User = model("User", userSchema);

export default User;
