import express, { Express, NextFunction, Request, Response } from "express";
import { create } from "express-handlebars";
import dotenv from "dotenv";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import connectDatabase from "./database.js";
import userRouter from "./routes/user/user.routes.js";
import logRouter from "./routes/log/log.routes.js";
import errorHandler from "./error/handler.js";
import LogModel from "./models/log.model.js";
import { registerSocketEvents } from "./socket.js";

dotenv.config();
const hbs = create();
const app: Express = express();

const httpServer = createServer(app);

app.use(cors({ origin: "*" }));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// serve static files
app.use(express.static("public"));

app.set("views", "./views");

const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.render("home", { data: "" });
  } catch (e) {
    console.log(e);
    res.status(500).send(`e`);
  }
});

app.get("/logs", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const logs = await LogModel.find({})
      .sort("-createdAt")
      .populate("user")
      .lean();
    res.render("index", { logs });
  } catch (e) {
    console.log(e);
    res.status(500).send(`e`);
  }
});

app.use(express.json());

app.use("/user", userRouter);
app.use("/log", logRouter);

app.use(errorHandler);

export const io = new Server(httpServer, {
  cors: {
    origin: "*", // Adjust origin for production
  },
});
registerSocketEvents(io);

const startServer = () => {
  connectDatabase();
  httpServer.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
};

startServer();
