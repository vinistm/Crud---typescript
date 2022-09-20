import * as express from "express";
import { IUserRequest } from "../../src/interfaces/user";
declare global {
    namespace Express {
      interface Request {
        user: {
            id:string
            email: string;
        };
      }
    }
  }