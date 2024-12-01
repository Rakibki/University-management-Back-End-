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

app.use(mainRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

//blobalErrorHanlder
app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;