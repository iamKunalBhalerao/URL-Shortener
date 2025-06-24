import { generateAccessAndRefreshTokens } from "../utils/generateTokens.js";
import { conflictError } from "../utils/errorHandler.js";
import { createUserInDB, findUserById, findUserByUsernameAndEmail } from "../dao/auth.js";

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
