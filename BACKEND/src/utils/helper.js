import { nanoid } from "nanoid";

export const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  maxAge: 7 * 24* 60 * 60 * 1000
};

export const generateNanoId = (length) => {
  return nanoid(length);
};
