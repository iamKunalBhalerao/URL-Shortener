import bcrypt from "bcrypt"
import { generateAccessAndRefreshTokens } from "../utils/generateTokens.js";
import { conflictError, UnauthorizedError } from "../utils/errorHandler.js";
import { createUserInDB, findUserByEmail, findUserById, findUserByUsernameAndEmail } from "../dao/auth.js";
import { comparePasswordUsingBcrypt } from "../utils/helper.js";

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

    const user = await findUserByEmail(email);
    if (!user) {
        throw new UnauthorizedError("The email or password you entered is incorrect");
    }

    const isPasswordValid = await comparePasswordUsingBcrypt({password: password,hashedPassword: user.password});
    // const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new UnauthorizedError("The email or password you entered is incorrect");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      user._id
    );

    return {
      user,
      accessToken,
      refreshToken,
    };
  } catch (err) {
    throw err;
  }
}
