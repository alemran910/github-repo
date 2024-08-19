"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const contact_info_1 = __importDefault(require("./routes/contact-info"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.get("/contact-info", (req, res) => {
    res.json((0, contact_info_1.default)());
});
app.get("/address", (req, res) => {
    res.json({ currentAddress: "birmingham", permanentAddress: "Bangladesh" });
});
app.get("/family-info", (req, res) => {
    res.json({
        fatherName: "amir",
        motherName: "shahin",
        sisterName1: "afsana",
        sisterName2: "mitu",
    });
});
app.get("/family-info/father", (req, res) => {
    res.json({
        fatherName: "amir",
        placeOfBirth: "bangladesh",
        language: ["bangla", "italian", "english", "urdu"],
    });
});
app.get("/family-info/mother", (req, res) => {
    res.json({
        motherName: "shahin",
        placeOfBirth: "bangladesh",
        language: ["bangla", "english"],
    });
});
app.get("/family-info/sister", (req, res) => {
    res.json({
        sisterName1: "afsana",
        placeOfBirth: "italy",
        language: ["bangla", "english", "urdu"],
    });
});
app.get("/family-info/sister2", (req, res) => {
    res.json({
        sisterName2: "mitu",
        placeOfBirth: "bangladesh",
        language: ["bangla", "italian", "english", "urdu"],
    });
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
