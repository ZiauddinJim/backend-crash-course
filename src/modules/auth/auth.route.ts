import { Router } from "express";
import validateSchema from "../../middleware/validateSchema.js";
import { AuthController } from "./auth.controller.js";

const router: Router = Router();

router.get("/login", validateSchema, AuthController.login);
router.get("/register", validateSchema, AuthController.register);
router.get("/change-password", validateSchema, AuthController.changePassword);
router.get("/forgot-password", validateSchema, AuthController.forgotPassword);

export const AuthRouter = router;
