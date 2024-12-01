import express from "express";
import userRouter from "../modules/user/user.routes";
import studnetRouter from "../modules/student/student.route";

const mainRouter = express.Router();

const moduleRoutes = [
  {
    path: "./users",
    route: userRouter,
  },
  {
    path: "./students",
    route: studnetRouter,
  },
];

moduleRoutes.forEach((route) => mainRouter.use(route.path, route.route));

export default mainRouter;
