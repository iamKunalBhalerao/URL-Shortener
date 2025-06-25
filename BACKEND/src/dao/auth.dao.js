import User from "../models/user.model.js";
import { UnauthorizedError } from "../utils/errorHandler.js";
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
  try {
    return await User.findOne({ email });
  } catch (err) {
    throw err;
  }
};

export const findUserByEmailAndPassword = async (email) => {
  try {
    return await User.findOne({ email }).select("+password");
  } catch (err) {
    throw err;
  }
};

export const findUserByEmailAndComparePassword = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthorizedError(
      "The email or password you entered is incorrect"
    );
  }

  if(!password) {
    throw new Error("Password is Required")
  }

  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    throw new UnauthorizedError(
      "The password you entered is incorrect"
    );
  }

  return user;

};

export const findUserById = async (userId) => {
  try {
    return await User.findById(userId).select("-password -refreshToken");
  } catch (err) {
    throw err;
  }
};

export const createUserInDB = async (username, email, password) => {
  const hashedPassword = await hashedPasswordUsingBcrypt(password);

  return await User.create({
    username,
    email,
    password: hashedPassword,
  });
};
