// controllers/recipeController.js
const axios = require("axios");
const { getDayName } = require("../utils/dayUtils");

// Helper: parse one block of text into structured data
const parseRecipeBlock = (block) => {
  const lines = block
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l);

  // Title is first line, strip numbering/asterisks
  const title = lines[0].replace(/^\d+\.?\s*/, "").replace(/\*{1,2}/g, "");

  // Find where "Ingredients" / "Instructions" start
  const ingIdx = lines.findIndex((l) => /ingredients[:]?/i.test(l));
  const instrIdx = lines.findIndex((l) => /instructions[:]?/i.test(l));

  // Grab the lines between
  const ingredients = lines
    .slice(ingIdx + 1, instrIdx)
    .map((l) => l.replace(/^[-\*\d\.\s]*/, ""));

  const instructions = lines
    .slice(instrIdx + 1)
    .map((l) => l.replace(/^[-\*\d\.\s]*/, ""));

  return { title, ingredients, instructions };
};

// Helper: fetch one image URL for a recipe title
const fetchImageFor = async (title) => {
  try {
    const res = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
      params: {
        key: process.env.GOOGLE_API_KEY,
        cx: process.env.GOOGLE_CX,
        q: `${title} Indian food`,
        searchType: "image",
        num: 1,
      },
    });
    return res.data.items?.[0]?.link || null;
  } catch {
    return null;
  }
};

exports.getDailyRecipe = async (req, res) => {
  try {
    const day = getDayName();

    // Ask Gemini for 2-3 recipes in one response
    const prompt = `Suggest  3 traditional Indian recipes suitable for ${day}.
Number each recipe like this:
1. Recipe Name
Ingredients: …
Instructions: …
2. Recipe Name
…`;

    const geminiRes = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      { contents: [{ parts: [{ text: prompt }], role: "user" }] },
      { headers: { "Content-Type": "application/json" } }
    );

    const rawText =
      geminiRes.data.candidates?.[0]?.content?.parts?.[0]?.text || "";

    // Split on “1.” “2.” etc., to get each recipe block
    const recipeBlocks = rawText.split(/\n(?=\d+\.)/).filter((b) => b.trim());

    // Parse each block and fetch its image
    const recipes = await Promise.all(
      recipeBlocks.map(async (block) => {
        const parsed = parseRecipeBlock(block);
        const image = await fetchImageFor(parsed.title);
        return { ...parsed, image };
      })
    );

    res.json({ day, recipes });
  } catch (error) {
    console.error(
      "Daily Recipe Error:",
      error.response?.data || error.message || error
    );
    res.status(500).json({ error: "Internal server error" });
  }
};
