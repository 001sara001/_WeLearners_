import TurkishWord from "../models/Words/TurkishWord.js";

export const addTurkishWord = async (req, res) => {
  /*
    wordList is an array, each element of this array 
    is an object of TurkishWord
  */
  const { wordList } = req.body;
  try {
    const newTurkishWord = await TurkishWord.insertMany(wordList);
    // newTurkishWord is an array of newly added TurkishWords
    //console.log(newTurkishWord);
    return res.status(201).json({ message: "Turkish words added successfully" });
  } catch (error) {
    console.error("Error adding Turkish word: ", error);
    return res.status(500).json({ error: "Error adding Turkish words" });
  }
};

export const getAllTurkishWords = async (req, res) => {
  try {
    const allTurkishWords = await TurkishWord.find().select(["-__v"]);
    return res.status(200).json(allTurkishWords);
  } catch (error) {
    console.error("Error getting Turkish words:", error);
    return res.status(500).json({ error: "Failed to fetch Turkish words" });
  }
};