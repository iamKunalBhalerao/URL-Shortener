import crypto from "crypto";

export const generateGravatar = (email, size = 200) => {
  if (!email) return null;

  // Trim and lowercase the email
  const normalizedEmail = email.trim().toLowerCase();

  // Create an MD5 hash of the email
  const hash = crypto.createHash("md5").update(normalizedEmail).digest("hex");

  // Construct the Gravatar URL
  return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon`;
};
