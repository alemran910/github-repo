"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const allowedOrigins = ["http://localhost:3000"];
const options = {
    origin: allowedOrigins,
};
app.use((0, cors_1.default)(options));
app.get("/contact-info", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const result = await pool.query("SELECT * FROM contactinfo");
        res.json({ status: "okay" });
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Error fetching contact info");
    }
}));
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
