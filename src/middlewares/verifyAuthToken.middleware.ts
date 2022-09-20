import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../errors/appError";

const verifyAuthToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new AppError(401, "Missing Authentication");
  }

  const tokenSplit = token.split(" ")[1];

  jwt.verify(
    tokenSplit,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        throw new AppError(401, "Missing Authentication");
      }
      req.body.user = {
        id: decoded.id,
        name : decoded.name
      };
    }
  );
  next();
};
export default verifyAuthToken;