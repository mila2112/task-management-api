import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(400).json({ message: err.message || 'Something went wrong' });
};
