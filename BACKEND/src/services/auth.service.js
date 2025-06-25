import { generateAccessAndRefreshTokens } from "../utils/generateTokens.js";
import { conflictError, UnauthorizedError } from "../utils/errorHandler.js";
import {
  createUserInDB,
  findUserByEmailAndComparePassword,
  findUserById,
  findUserByUsernameAndEmail,
} from "../dao/auth.dao.js";

export const signupUser = async (username, email, password) => {
  try {
    const existingUser = await findUserByUsernameAndEmail(username, email);
    if (existingUser) {
      throw new conflictError("User Alredy Exists!");
    }

    const createUser = await createUserInDB(username, email, password);
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      createUser._id
    );
    const user = await findUserById(createUser._id);

    return {
      user,
      accessToken,
      refreshToken,
    };
  } catch (err) {
    throw err;
  }
};

export const signinUser = async (email, password) => {
  try {
    const findUser = await findUserByEmailAndComparePassword(email, password);

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      findUser._id
    );

    const user = findUser.toObject();
    delete user.password;

    return {
      user,
      accessToken,
      refreshToken,
    };
  } catch (err) {
    throw err;
  }
};

export const isUserAuthenticated = async (userId) => {
  try {
    const user = await findUserById(userId);
    if (!user) {
      throw new UnauthorizedError("You are not authorized");
    }
    return user;
  } catch (err) {
    throw err;
  }
};
