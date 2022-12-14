import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../errors/appError";

const verifyAuthToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new AppError(401, "Missing Authentication");
  }

  const tokenSplit = token.split(" ");

  jwt.verify(
    tokenSplit[1],
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        throw new AppError(401, "Missing Authentication");
      }
      req.user = {
        id: decoded.id,
        email:decoded.email
      };
    }
  );
  next();
};
export default verifyAuthToken;
