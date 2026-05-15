import { Router } from "express";
import validateSchema from "../../middleware/validateSchema.js";
import {
  LoginSchema,
  RegisterSchema,
  changePasswordSchema,
  ForgetPasswordSchema,
} from "./auth.validation.js";
import { AuthController } from "./auth.controller.js";

const router: Router = Router();

router.post("/login", validateSchema(LoginSchema), AuthController.login);
router.post("/register", validateSchema(RegisterSchema), AuthController.register);
router.post(
  "/change-password",
  validateSchema(changePasswordSchema),
  AuthController.changePassword,
);
router.post(
  "/forgot-password",
  validateSchema(ForgetPasswordSchema),
  AuthController.forgotPassword,
);

export const AuthRouter = router;
