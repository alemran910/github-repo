import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { contactInfo } from "./routes/contact-info";
import { personalInfo } from "./routes/personal-info";
import { addressInfo } from "./routes/address";
import {
  familyInfo,
  fatherInfo,
  motherInfo,
  sister1Info,
  sister2Info,
} from "./routes/family-info";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/contact-info", (req: Request, res: Response) => {
  res.json(contactInfo());
});

app.get("/personal-info", (req: Request, res: Response) => {
  res.json(personalInfo());
});

app.get("/address", (req: Request, res: Response) => {
  res.json(addressInfo());
});

app.get("/family-info", (req: Request, res: Response) => {
  res.json(familyInfo());
});

app.get("/family-info/father", (req: Request, res: Response) => {
  res.json(fatherInfo());
});

app.get("/family-info/mother", (req: Request, res: Response) => {
  res.json(motherInfo());
});

app.get("/family-info/sister1", (req: Request, res: Response) => {
  res.json(sister1Info());
});

app.get("/family-info/sister2", (req: Request, res: Response) => {
  res.json(sister2Info());
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
