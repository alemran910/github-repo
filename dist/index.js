"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const contact_info_1 = require("./routes/contact-info");
const info_1 = require("./routes/info");
const address_1 = require("./routes/address");
const familyInfo_1 = require("./routes/familyInfo");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.get("/contact-info", (req, res) => {
    res.json((0, contact_info_1.contactInfo)());
});
app.get("/personal-info", (req, res) => {
    res.json((0, info_1.personalInfo)());
});
app.get("/address", (req, res) => {
    res.json((0, address_1.addressInfo)());
});
app.get("/family-info", (req, res) => {
    res.json((0, familyInfo_1.familyInfo)());
});
app.get("/family-info/father", (req, res) => {
    res.json((0, familyInfo_1.fatherInfo)());
});
app.get("/family-info/mother", (req, res) => {
    res.json((0, familyInfo_1.motherInfo)());
});
app.get("/family-info/sister1", (req, res) => {
    res.json((0, familyInfo_1.sister1Info)());
});
app.get("/family-info/sister2", (req, res) => {
    res.json((0, familyInfo_1.sister2Info)());
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
