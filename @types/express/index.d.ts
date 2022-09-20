import * as express from "express";
import { IUserRequest } from "../../src/interfaces/user";
declare global {
    namespace Express {
      interface Request {
        user: {
            name: string;
            email: string;
            password: string;
            telephone: number;
        };
      }
    }
  }