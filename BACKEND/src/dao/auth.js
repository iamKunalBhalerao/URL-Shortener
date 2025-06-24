import User from "../models/user.model.js";
import { hashedPasswordUsingBcrypt } from "../utils/helper.js";

export const findUserByUsernameAndEmail = async (username, email) => {
  try {
    return await User.findOne({
      $or: [{ username }, { email }],
    });
  } catch (err) {
    throw err;
  }
};

export const findUserByEmail = async (email) => {
  try{
    return await User.findOne({email})
  }catch(err){throw err}
}

export const findUserById = async (userId) => {
  try{
    return await User.findById(userId).select("-password -refreshToken")
  }catch(err){throw err}
}

export const createUserInDB = async (username, email, password) => {
  const hashedPassword = await hashedPasswordUsingBcrypt(password);

  return await User.create({
    username,
    email,
    password: hashedPassword,
  });
};
