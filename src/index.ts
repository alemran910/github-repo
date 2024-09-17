import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import pool from "./db";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const allowedOrigins = ["http://localhost:3000"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
app.get("/contact-info", async (req: Request, res: Response) => {
  try {
    // const result = await pool.query("SELECT * FROM contactinfo");
    res.json({ status: "okay" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching contact info");
  }
});

// app.get("/contact-info", async (req: Request, res: Response) => {
//   try {
//     const result = await pool.query("SELECT * FROM contactinfo");
//     res.json(result.rows[0]);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error fetching contact info");
//   }
// });

// app.get("/personal-info", async (req: Request, res: Response) => {
//   try {
//     const result = await pool.query("SELECT * FROM personalinfo");
//     res.json(result.rows[0]);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error fetching personal info");
//   }
// });

// app.get("/address", async (req: Request, res: Response) => {
//   try {
//     const result = await pool.query("SELECT * FROM addressinfo");
//     res.json(result.rows[0]);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error fetching address info");
//   }
// });

// app.get("/family-info", async (req: Request, res: Response) => {
//   try {
//     const result = await pool.query("SELECT * FROM familyinfo");
//     res.json(result.rows[0]);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error fetching family info");
//   }
// });

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
