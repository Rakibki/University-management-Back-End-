import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRouter from "./modules/user/user.routes";
import notFound from "./middlewares/notFound";
import globalErrorHandler from "./middlewares/globalErrorhandler";
import mainRouter from "./routes";

const app: Application = express();

// //parsers
app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

//global Error Handler
app.use(globalErrorHandler);

//Not Found route
app.use(notFound);

export default app;