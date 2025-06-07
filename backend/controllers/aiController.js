
const axios = require('axios');
require('dotenv').config();

exports.getRecipeSuggestion = async (req, res) => {
  try {
    const { ingredients, preferences, mealType } = req.body;

    // 1. Prompt to Gemini
const prompt = `Suggest a brief Indian ${mealType} recipe using these ingredients: ${ingredients.join(', ')}. 
Preferences: ${preferences.join(', ')}. Keep the recipe short and simple. Provide only the recipe name, 3–5 main ingredients, and concise instructions in 3–5 steps.`;


    const geminiRes = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }],
            role: "user",
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const recipe = geminiRes.data.candidates?.[0]?.content?.parts?.[0]?.text || 'No recipe found.';

    // 2. Extract recipe name (first line of response)
    const recipeName = recipe.split('\n')[0];

    // 3. Use Google Custom Search API to find image
    const imageSearchRes = await axios.get(
      `https://www.googleapis.com/customsearch/v1`,
      {
        params: {
          key: process.env.GOOGLE_API_KEY,
          cx: process.env.GOOGLE_CX,
          q: recipeName,
          searchType: 'image',
          num: 1,
        },
      }
    );

    const imageUrl = imageSearchRes.data.items?.[0]?.link || null;

    // 4. Send recipe and image
    res.json({ recipe, image: imageUrl });

  } catch (error) {
    console.error("Error:", error.response?.data || error.message || error);
    res.status(500).json({ error: "Internal server error" });
  }
};
