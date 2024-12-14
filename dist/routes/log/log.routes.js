import express from "express";
import { createLogController, getLogController } from "./log.controller.js";
const router = express.Router();
// get logs
router.get("/", getLogController);
// create log
router.post("/", createLogController);
export default router;
//# sourceMappingURL=log.routes.js.map