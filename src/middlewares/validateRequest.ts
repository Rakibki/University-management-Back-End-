import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

const validateRequest = (validateSchema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await validateSchema.parseAsync({
        body: req.body,
      });

      next();
    } catch (e) {
      next(e);
    }
  };
};

export default validateRequest;