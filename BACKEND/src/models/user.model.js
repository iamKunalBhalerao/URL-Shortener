import mongoose, { Schema, model } from "mongoose";
import { generateGravatar } from "../utils/generateGravatar.js";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
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
      // select: false,
    },
    avatar: {
      type: String,
      default: function () {
        return generateGravatar(this.email);
      },
    },
    refreshToken: {
      type: String,
      select: false,
      default: "",
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

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

export default User;
