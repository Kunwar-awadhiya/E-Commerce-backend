
import express  from "express";
import { newUser } from "../controllers/user.js";

const app = express.Router();

// route - /api/vi/user/new
app.post("/new", newUser);

export default app;


