import JapaneseWord from "../models/Words/JapaneseWord.js";

export const addJapaneseWord = async (req, res) => {
  /*
    wordList is an array, each element of this array 
    is an object of JapaneseWord
  */
  const { wordList } = req.body;
  try {
    const newJapaneseWord = await JapaneseWord.insertMany(wordList);
    // newJapaneseWord is an array of newly added JapaneseWords
    //console.log(newJapaneseWord);
    return res.status(201).json({ message: "Japanese words added successfully" });
  } catch (error) {
    console.error("Error adding Japanese word: ", error);
    return res.status(500).json({ error: "Error adding Japanese words" });
  }
};

export const getAllJapaneseWords = async (req, res) => {
  try {
    const allJapaneseWords = await JapaneseWord.find().select(["-__v"]);
    return res.status(200).json(allJapaneseWords);
  } catch (error) {
    console.error("Error getting Japanese words:", error);
    return res.status(500).json({ error: "Failed to fetch Japanese words" });
  }
};