import express, { Router, Request, Response, NextFunction } from "express";
import { createLogController, getLogController } from "./log.controller.js";

const router: Router = express.Router();

// get logs
router.get("/", getLogController);

// create log
router.post("/", createLogController);

export default router;
