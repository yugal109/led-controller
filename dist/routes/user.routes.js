import express from "express";
import { userController } from "./user/user.controller.js";
const router = express.Router();
router.get("/", [], userController);
export default router;
//# sourceMappingURL=user.routes.js.map