import express, { Router, Request, Response, NextFunction } from "express";
import {
  createUserController,
  deleteUserController,
  getUserController,
} from "./user.controller.js";

const router: Router = express.Router();

// get users
router.get("/", getUserController);

// create user
router.post("/", createUserController);

// delete user
router.delete("/", deleteUserController);

export default router;
