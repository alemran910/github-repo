import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/contact-info", (req: Request, res: Response) => {
  res.json({ phone: "07466998681", email: "alemran@gmail.com", address: 1 });
});

app.get("/address", (req: Request, res: Response) => {
  res.json({ currentAddress: "birmingham", permanentAddress: "Bangladesh" });
});

app.get("/family-info", (req: Request, res: Response) => {
  res.json({
    fatherName: "amir",
    motherName: "shahin",
    sisterName1: "afsana",
    sisterName2: "mitu",
  });
});

app.get("/family-info/father", (req: Request, res: Response) => {
  res.json({
    fatherName: "amir",
    placeOfBirth: "bangladesh",
    language: ["bangla", "italian", "english", "urdu"],
  });
});

app.get("/family-info/mother", (req: Request, res: Response) => {
  res.json({
    motherName: "shahin",
    placeOfBirth: "bangladesh",
    language: ["bangla", "english"],
  });
});

app.get("/family-info/sister", (req: Request, res: Response) => {
  res.json({
    sisterName1: "afsana",
    placeOfBirth: "italy",
    language: ["bangla", "english", "urdu"],
  });
});

app.get("/family-info/sister2", (req: Request, res: Response) => {
  res.json({
    sisterName2: "mitu",
    placeOfBirth: "bangladesh",
    language: ["bangla", "italian", "english", "urdu"],
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
