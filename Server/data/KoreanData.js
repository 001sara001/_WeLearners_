import KoreanWord from "../models/Words/KoreanWord.js";

export const addKoreanWord = async (req, res) => {
  /*
    wordList is an array, each element of this array 
    is an object of KoreanWord
  */
  const { wordList } = req.body;
  try {
    const newKoreanWord = await KoreanWord.insertMany(wordList);
    // newKoreanWord is an array of newly added KoreanWords
    //console.log(newKoreanWord);
    return res.status(201).json({ message: "Korean words added successfully" });
  } catch (error) {
    console.error("Error adding Korean word: ", error);
    return res.status(500).json({ error: "Error adding Korean words" });
  }
};

export const getAllKoreanWords = async (req, res) => {
  try {
    const allKoreanWords = await KoreanWord.find().select(["-__v"]);
    return res.status(200).json(allKoreanWords);
  } catch (error) {
    console.error("Error getting Korean words:", error);
    return res.status(500).json({ error: "Failed to fetch Korean words" });
  }
};