const PORT = 8000;
const axios = require("axios").default;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());

app.get("/translate", async (req, res) => {
  const { textToTranslate, translatedLang, selectedLang } = req.query;

  const options = {
    method: "GET",
    params: { text: textToTranslate, tl: translatedLang, sl: selectedLang },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.RAPID_API_HOST,
    },
  };

  try {
    const response = await axios(
      "https://google-translate20.p.rapidapi.com/translate",
      options
    );
    res.json(response.data.data.translation);
    console.log("This is the response", response.data.data.translation);
    setTranslation(response.data.data.translation);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err });
  }
});

app.listen(PORT, () => console.log(`Server is runnin on Port ${PORT}`));
