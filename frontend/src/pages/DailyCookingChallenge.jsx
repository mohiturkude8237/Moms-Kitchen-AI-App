import React, { useState, useEffect } from "react";
import {
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Clock,
} from "lucide-react";

const sampleChallenges = [
  // ... your same data here ...
  {
    id: 1,
    title: "Spicy Thai Curry",
    image:
      "https://www.marionskitchen.com/wp-content/uploads/2023/06/Thai-Red-Curry-Beef-04.jpg",
    difficulty: "Medium",
    prepTime: "45 minutes",
    likes: 243,
    dislikes: 12,
    ingredients: ["Chicken", "Coconut milk", "Thai curry paste", "Vegetables"],
    instructions: [
      "Heat oil in a pan.",
      "Add curry paste and sauté.",
      "Add chicken and cook until brown.",
      "Add coconut milk and simmer.",
      "Add vegetables and cook until done.",
    ],
  },
  {
    id: 2,
    title: "Classic Pancakes",
    image:
      "https://4.bp.blogspot.com/-YUS1Y3CTV-8/V1erQPwUqqI/AAAAAAAANWM/It8k5w4a-pk8GAN7fBrK3hArH5NJ144ewCLcB/s1600/easy+homemade+pancake+recipe.jpg",
    difficulty: "Easy",
    prepTime: "20 minutes",
    likes: 356,
    dislikes: 8,
    ingredients: ["Flour", "Eggs", "Milk", "Baking powder", "Sugar"],
    instructions: [
      "Mix all ingredients in a bowl.",
      "Heat a pan and grease it lightly.",
      "Pour batter and cook on both sides until golden.",
    ],
  },

  {
    id: 3,
    title: "Dessert CreamCake Ice",
    image:
      "https://t3.ftcdn.net/jpg/03/01/97/86/360_F_301978652_O0aPwap1JaEVaAhj3mIlbqNnJGmRyCzC.jpg",
    difficulty: "Hard",
    prepTime: "120 minutes",
    likes: 36,
    dislikes: 8,
    ingredients: [
      "Flour",
      "Eggs",
      "Milk",
      "Baking powder",
      "Sugar",
      "Whipping cream",
      "Vanilla essence",
      "Ice cream (vanilla or your choice)",
      "Butter",
    ],
    instructions: [
      "Preheat the oven to 180°C (350°F).",
      "Mix flour, baking powder, and sugar in a bowl.",
      "In another bowl, whisk eggs, milk, melted butter, and vanilla essence.",
      "Combine wet and dry ingredients to form a smooth batter.",
      "Pour the batter into a greased cake pan and bake for 40–45 minutes.",
      "Let the cake cool completely.",
      "Whip the cream until soft peaks form and spread it over the cooled cake.",
      "Chill the cake for 30 minutes.",
      "Serve slices with a scoop of ice cream on the side or top.",
    ],
  },
];

const DailyCookingChallenge = () => {
  const [challenges, setChallenges] = useState(sampleChallenges);
  const [showDetails, setShowDetails] = useState({});
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem("challenge-comments");
    if (stored) setComments(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("challenge-comments", JSON.stringify(comments));
  }, [comments]);

  const toggleDetails = (id) => {
    setShowDetails((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  


  const handleLike = (id) => {
    setChallenges((prev) =>
      prev.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  const handleDislike = (id) => {
    setChallenges((prev) =>
      prev.map((c) => (c.id === id ? { ...c, dislikes: c.dislikes + 1 } : c))
    );
  };

  const handleAddComment = (id) => {
    if (!newComment[id]?.trim()) return;
    const updatedComments = {
      ...comments,
      [id]: [...(comments[id] || []), newComment[id]],
    };
    setComments(updatedComments);
    setNewComment((prev) => ({ ...prev, [id]: "" }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 p-40">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center font-serif text-gray-800 mb-10">
        🍽️ Daily Cooking Challenges 😋
      </h1>

      <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-3">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col"
          >
            <img
              src={challenge.image}
              alt={challenge.title}
              className="w-full h-80 object-cover rounded-xl mb-4"
            />
            <h2 className="text-lg font-bold text-gray-800 mb-1">
              {challenge.title}
            </h2>

            <p className="text-sm text-gray-600 mb-3 flex justify-between">
              <span>Difficulty: {challenge.difficulty}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-gray-500" />
                {challenge.prepTime}
              </span>
            </p>

            <div className="flex items-center gap-4 mb-3">
              <button
                onClick={() => handleLike(challenge.id)}
                className="flex items-center gap-1 text-green-600 hover:scale-110 transition-transform"
              >
                <ThumbsUp size={18} /> {challenge.likes}
              </button>
              <button
                onClick={() => handleDislike(challenge.id)}
                className="flex items-center gap-1 text-red-600 hover:scale-110 transition-transform"
              >
                <ThumbsDown size={18} /> {challenge.dislikes}
              </button>
              <span className="flex items-center gap-1 text-blue-600">
                <MessageCircle size={18} />{" "}
                {comments[challenge.id]?.length || 0}
              </span>
            </div>

            <button
              onClick={() => toggleDetails(challenge.id)}
              className="text-sm text-indigo-600 hover:underline flex items-center gap-1 mb-2"
            >
              {showDetails[challenge.id] ? (
                <>
                  Hide Details <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Show Details <ChevronDown size={16} />
                </>
              )}
            </button>

            {showDetails[challenge.id] && (
              <div className="mt-2 text-sm text-gray-700">
                <div className="mb-3">
                  <h3 className="font-semibold">Ingredients:</h3>
                  <ul className="list-disc list-inside pl-2">
                    {challenge.ingredients.map((ing, idx) => (
                      <li key={idx}>{ing}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-3">
                  <h3 className="font-semibold">Instructions:</h3>
                  <ol className="list-decimal list-inside pl-2">
                    {challenge.instructions.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </div>

                <div className="mt-4 border-t pt-3">
                  <h4 className="font-semibold mb-2">Comments:</h4>
                  <ul className="space-y-2 mb-2">
                    {(comments[challenge.id] || []).map((cmt, idx) => (
                      <li
                        key={idx}
                        className="bg-gray-100 px-3 py-2 rounded-md text-sm"
                      >
                        {cmt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2 items-center">
                    <input
                      type="text"
                      value={newComment[challenge.id] || ""}
                      onChange={(e) =>
                        setNewComment((prev) => ({
                          ...prev,
                          [challenge.id]: e.target.value,
                        }))
                      }
                      placeholder="Write a comment..."
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <button
                      onClick={() => handleAddComment(challenge.id)}
                      className="text-sm text-white bg-indigo-600 px-3 py-1.5 rounded hover:bg-indigo-700 transition"
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyCookingChallenge;

