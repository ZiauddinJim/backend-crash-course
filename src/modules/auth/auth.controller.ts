import type { Request, Response } from "express";
import { AuthService } from "./auth.service.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

const login = async (req: Request, res: Response) => {
  const result = await AuthService.login("zia@gmail.com");
  ApiResponse.success(res, "Login successfully", result);
};
const register = async (req: Request, res: Response) => {
  const result = await AuthService.register("zia@gmail.com");
  ApiResponse.success(res, "Registration successfully", result);
};
const changePassword = async (req: Request, res: Response) => {
  const result = await AuthService.changePassword("zia@gmail.com");
  ApiResponse.success(res, "Change password successfully", result);
};
const forgotPassword = async (req: Request, res: Response) => {
  const result = await AuthService.forgotPassword("zia@gmail.com");
  ApiResponse.success(res, "forget password successfully", result);
};

export const AuthController = {
  login,
  register,
  changePassword,
  forgotPassword,
};
