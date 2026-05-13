import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import cors from "cors";
import cookieParse from "cookie-parser";

const app: Application = express();

app.use(cors());
app.use(cookieParse());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: "Ok",
    message: "Server is running",
    uptime: process.uptime,
  });
});

export default app;
