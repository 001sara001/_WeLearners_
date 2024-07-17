import Word from "../models/Words/Word.js";

export const addWord = async (req, res) => {
  /*
    wordList is an array, each element of this array 
    is an object of Word
  */
  const { wordList } = req.body;
  try {
    const newWord = await Word.insertMany(wordList);
    // newWord is an array of newly added Words
    //console.log(newWord);
    return res.status(201).json({ message: " words added successfully" });
  } catch (error) {
    console.error("Error adding  word: ", error);
    return res.status(500).json({ error: "Error adding  words" });
  }
};

export const getAllWords = async (req, res) => {
  try {
    const allWords = await Word.find().select(["-__v"]);
    return res.status(200).json(allWords);
  } catch (error) {
    console.error("Error getting  words:", error);
    return res.status(500).json({ error: "Failed to fetch  words" });
  }
};