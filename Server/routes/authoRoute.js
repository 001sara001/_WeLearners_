import express from "express";
import cors from "cors";
import authoController from "../controller/authoController.js";

const router = express.Router();

// Middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/", authoController.test);
router.post("/login", authoController.loginUser);
router.post("/register", authoController.registerUser);

export default router;