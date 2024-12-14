import { CustomError } from "./custom.error.js";
import { NextFunction, Request, Response } from "express";

const errorHandler = (
  err: Error | CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Default error values
  let statusCode = 500;
  let message = "Internal Server Error.";

  // Check if the error is a CustomError
  if (err instanceof CustomError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  res.status(statusCode).send({ error: message });
};

export default errorHandler;
