/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  const statusCode = 500;
  const errorMessage = err.message || "Something went wrong !!";

  return res.status(statusCode).json({
    sucess: false,
    message: errorMessage,
    error: err,
  });
};

export default globalErrorHandler;