// import axios from "axios";
// import React, { useState } from "react";
// import {assets} from '../assets/assets'
// const SearchRecipe = () => {
//   const [ingredients, setIngredients] = useState("");
//   const [preferences, setPreferences] = useState("");
//   const [mealType, setMealType] = useState("breakfast");
//   const [recipe, setRecipe] = useState("");
//   const [image, setImage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://localhost:5000/api/ai/suggest", {
//         ingredients: ingredients.split(",").map((i) => i.trim()),
//         preferences: preferences.split(",").map((p) => p.trim()),
//         mealType,
//       });

//       setRecipe(res.data.recipe);
//       setImage(res.data.image); // 👈 set image URL
//     } catch (err) {
//       console.error("Error fetching recipe:", err);
//       setRecipe("Failed to fetch recipe");
//       setImage("");
//     }
//   };
//   return (
//     <div className="w-full  mt-30 h-full"
//     >
//       <h1 className="text-3xl font-bold text-center mb-6 prata-regular p-8">
//         AI Recipe Generator
//       </h1>
//       <form onSubmit={handleSubmit} className="w-full md:w-[50%] mx-auto bg-white p-6 rounded-lg shadow-md">
//         <input
//           type="text"
//           placeholder="Ingredients (comma separated)"
//           value={ingredients}
//           onChange={(e) => setIngredients(e.target.value)}
//           className="w-full mb-4 p-2 border rounded placeholder:text-xl"
//         />
//         <input
//           type="text"
//           placeholder="Preferences (comma separated)"
//           value={preferences}
//           onChange={(e) => setPreferences(e.target.value)}
//           className="w-full mb-4 p-2 border rounded placeholder:text-xl"
//         />
//         <select
//           value={mealType}
//           onChange={(e) => setMealType(e.target.value)}
//           className="w-full mb-4 p-2 border rounded text-xl"
//         >
//           <option>breakfast</option>
//           <option>lunch</option>
//           <option>dinner</option>
//           <option>snack</option>
//         </select>
//         <button
//           type="submit"
//           className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 text-xl font-serif cursor-pointer"
//         >
//           Get Recipe
//         </button>
//       </form>

//       {(recipe || image) && (
//         <div className="flex flex-col items-center w-full md:w-[50%] mx-auto mt-6 bg-white p-4 rounded shadow text-gray-800">
//           {image && (
//             <img
//               src={image}
//               alt="Dish"
//               className="md:w-[70%] h-80 rounded mb-4 border"
//             />
//           )}
//           <pre className="whitespace-pre-wrap">{recipe}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchRecipe;
import React, { useState } from 'react';
import axios from 'axios';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { assets } from '../assets/assets';

const SearchRecipe = () => {
  const [ingredients, setIngredients] = useState('');
  const [preferences, setPreferences] = useState('');
  const [mealType, setMealType] = useState('breakfast');
  const [recipe, setRecipe] = useState('');
  const [image, setImage] = useState('');
  const [showRecipe, setShowRecipe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://moms-kitchen-ai-app.onrender.com/api/ai/suggest', {
        ingredients: ingredients.split(',').map((i) => i.trim()),
        preferences: preferences.split(',').map((p) => p.trim()),
        mealType,
      });

      setRecipe(res.data.recipe);
      setImage(res.data.image);
      setShowRecipe(true); // Auto-show result after search
    } catch (err) {
      console.error('Error fetching recipe:', err);
      setRecipe('Failed to fetch recipe');
      setImage('');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center px-4 py-10"
      style={{ backgroundImage: `url(${assets.img8})` }}
    >
      <h1 className="text-4xl font-bold text-white mb-10 drop-shadow-lg mt-25 prata-regular">AI Recipe Generator</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/30"
      >
        <input
          type="text"
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="text-xl w-full mb-4 p-3 rounded-lg border border-white/40 focus:outline-none focus:ring-2 focus:ring-green-300 placeholder:text-2xl"
        />
        <input
          type="text"
          placeholder="Preferences (comma separated)"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          className="text-xl w-full mb-4 p-3 rounded-lg border border-white/40 focus:outline-none focus:ring-2 focus:ring-green-300 placeholder:text-2xl"
        />
        <select
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
          className=" w-full mb-6 p-3 rounded-lg border border-white/40 focus:outline-none focus:ring-2 focus:ring-green-300 text-2xl"
        >
          <option>breakfast</option>
          <option>lunch</option>
          <option>dinner</option>
          <option>snack</option>
        </select>
        <button
          type="submit"
          className="text-2xl prata-regular w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-t-2xl font-semibold transition-all cursor-pointer"
        >
          Get Recipe
        </button>
      </form>

      {(recipe || image) && (
        <div className="mt-10 w-full max-w-3xl backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl shadow-xl p-6 text-white">
          {/* Toggle Button */}
          <button
            onClick={() => setShowRecipe(!showRecipe)}
            className="flex items-center gap-2 text-lg font-semibold mb-4"
          >
            {showRecipe ? 'Hide Recipe' : 'Show Recipe'}
            {showRecipe ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {showRecipe && (
            <div className="transition-all duration-300">
              {image && (
                <img
                  src={image}
                  alt="Dish"
                  className="w-full h-64 object-cover rounded-xl mb-6 border-2 border-white/40 shadow-md"
                />
              )}
              <pre className="whitespace-pre-wrap text-lg leading-relaxed font-medium drop-shadow">
                {recipe}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchRecipe;
