import jwt from "jsonwebtoken";
import HttpError from "../models/http-error.js";
import dotenv from "dotenv";

dotenv.config();

export default (req, res, next) => {
  if (req.method === "OPTION") {
    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      throw new Error("Authentication failed!");
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET); //please make your own secret
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    const error = new HttpError("Authentication failed!", 403);
    return next(error);
  }
};
