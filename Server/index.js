import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from "./routes/authoRoute.js";
import { addWord, getAllWords } from "./data/Data.js";
import { log } from "./middlewares/logger.js";
import { addKoreanWord, getAllKoreanWords } from "./data/KoreanData.js";
import { addTurkishWord, getAllTurkishWords } from "./data/TurkishData.js";
// import { addBanglaWord, getAllBanglaWords } from "./data/BanglaData.js";
import { addJapaneseWord, getAllJapaneseWords } from "./data/JapaneseData.js";
// Middleware
dotenv.config();
const app = express();
const corsOptions = {
  origin: true,
};
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());
app.use(log);
app.use("/auth", authRoute);
app.get("/", authRoute);
const port = 5000;
const MONGODB_URI =
  "mongodb+srv://Raisuki:R7@cluster0.cv6zecv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGODB_URI, {})
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error(`Error Connecting database: ${err.message}`));

// Database connection
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("Database is Connected"))
//   .catch((err) => console.log("Database not connected", err));

// Server setup
//const port = process.env.port || 8000;

// Route to add a new word
app.post("/words", addWord);
// Route to get all words
app.get("/words", async (req, res) => {
  try {
    const words = await getAllWords();
    return res.status(200).json(words);
  } catch (error) {
    console.error("Error getting words:", error);
    return res.status(500).json({ error: "Failed to fetch words" });
  }
});

// route to add korean words
app.post("/korean-words", addKoreanWord);

// Route to get all Korean words
app.get("/korean-words", async (req, res) => {
  try {
    const koreanWords = await getAllKoreanWords();
    return res.status(200).json(koreanWords);
  } catch (error) {
    console.error("Error getting Korean words:", error);
    return res.status(500).json({ error: "Failed to fetch Korean words" });
  }
});
// route to add turkish words
app.post("/turkish-words", addTurkishWord);

// Route to get all turkish-words
app.get("/turkish-words", async (req, res) => {
  try {
    const TurkishWords = await getAllTurkishWords();
    return res.status(200).json(TurkishWords);
  } catch (error) {
    console.error("Error getting Turkish words:", error);
    return res.status(500).json({ error: "Failed to fetch Turkish words" });
  }
});
// app.post("/bangla-words", addBanglaWord);

// // Route to get all Bangla words
// app.get("/bangla-words", async (req, res) => {
//   try {
//     const BanglaWords = await getAllBanglaWords();
//     return res.status(200).json(BanglaWords);
//   } catch (error) {
//     console.error("Error getting Bangla words:", error);
//     return res.status(500).json({ error: "Failed to fetch Bangla words" });
//   }
// });

app.post("/japanese-words", addJapaneseWord);

// Route to get all Japanese words
app.get("/japanese-words", async (req, res) => {
  try {
    const JapaneseWords = await getAllJapaneseWords();
    return res.status(200).json(JapaneseWords);
  } catch (error) {
    console.error("Error getting Japanese words:", error);
    return res.status(500).json({ error: "Failed to fetch Japanese words" });
  }
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});