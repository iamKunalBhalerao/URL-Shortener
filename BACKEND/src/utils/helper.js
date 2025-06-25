import { nanoid } from "nanoid";
import bcrypt from "bcrypt"

export const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  maxAge: 7 * 24* 60 * 60 * 1000
};

export const generateNanoId = (length) => {
  return nanoid(length);
};

export const hashedPasswordUsingBcrypt = async (password) => {
  return await bcrypt.hash(password, 10)
}
