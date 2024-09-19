import BanglaWord from "../models/Words/BanglaWord.js";

export const addBanglaWord = async (req, res) => {
  /*
    wordList is an array, each element of this array 
    is an object of BanglaWord
  */
  const { banglawordList } = req.body;
  try {
    const newBanglaWord = await BanglaWord.insertMany(banglawordList);
    // newBanglaWord is an array of newly added BanglaWords
    //console.log(newBanglaWord);
    return res.status(201).json({ message: "Bangla words added successfully" });
  } catch (error) {
    console.error("Error adding Bangla word: ", error);
    return res.status(500).json({ error: "Error adding Bangla words" });
  }
};

export const getAllBanglaWords = async (req, res) => {
  try {
    const allBanglaWords = await BanglaWord.find().select(["-__v"]);
    return res.status(200).json(allBanglaWords);
  } catch (error) {
    console.error("Error getting Bangla words:", error);
    return res.status(500).json({ error: "Failed to fetch Bangla words" });
  }
};