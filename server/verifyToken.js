import { createError } from "./error.js";
import jwt from "jsonwebtoken";

export const verify = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "You are not authenticated!"));

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Invalid token!"));
    req.user = user;
    next();
  });
};
