import type { Request, Response } from "express";
import { success } from "zod";

const notFound = (req: Request, res: Response) => {
  res.status(404).send({
    success: false,
    message: "API not Found",
  });
};
export default notFound;
