import express from "express";
import { StudentControllers } from "./student.controller";

const studnetRouter = express.Router();

studnetRouter.get("/:studentId", StudentControllers.getSingleStudent);

studnetRouter.delete("/:studentId", StudentControllers.deleteStudent);

studnetRouter.get("/", StudentControllers.getAllStudents);

export default studnetRouter;