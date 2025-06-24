import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export const findUserByUsernameAndEmail = async (username, email) => {
  try {
    return await User.findOne({
      $or: [{ username }, { email }],
    });
  } catch (err) {
    throw err;
  }
};

export const findUserById = async (userId) => {
  try{
    return await User.findById(userId)
  }catch(err){throw err}
}

export const createUserInDB = async (username, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  return await User.create({
    username,
    email,
    password: hashedPassword,
  });
};
