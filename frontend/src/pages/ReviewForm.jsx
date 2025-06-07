import React, { useState, useEffect } from "react";

const initialTestimonials = [
  {
    name: "Leslie Alexander",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    title: "I'm obsessed!",
    review:
      "I've added hundreds of recipes to the app, and I use it every day. It helps me to plan out my meals and even writes my grocery list for me. It’s made me fall back in love with cooking.",
    rating: 5,
  },
  {
    name: "Sue Pilch",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    title: "Worth every penny",
    review:
      "Before ReciMe, my recipe collection was scattered across various saved folders on Instagram—an absolute nightmare to manage.",
    rating: 4,
  },
  {
    name: "Phil Brown",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    title: "I’ll never go back",
    review:
      "I used to use Excel to track my meal plans and grocery lists. It was overly complicated and took up all my time. NEVER AGAIN!",
    rating: 5,
  },
  {
    name: "Rachel Kim",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    title: "Love the design!",
    review:
      "Clean interface, intuitive design, and everything I need to plan meals stress-free. My weekly routine just got so much easier.",
    rating: 5,
  },
];

const TestimonialCard = ({ name, image, title, review, rating }) => (
  <div className="bg-gray-50 rounded-2xl p-6 shadow-lg h-96 w-72 flex flex-col justify-between">
    <div>
      <div className="flex mb-2 text-orange-400 text-lg">
        {Array(rating || 5)
          .fill("★")
          .map((star, idx) => (
            <span key={idx}>{star}</span>
          ))}
      </div>
      <h3 className="text-lg font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700 leading-relaxed text-sm mb-4 break-words whitespace-pre-line">
        "{review}"
      </p>
    </div>
    <div className="flex items-center gap-3">
      <img src={image} alt={name} className="w-10 h-10 rounded-full" />
      <span className="font-semibold text-gray-800">{name}</span>
    </div>
  </div>
);

const ReviewForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    review: "",
    rating: 5,
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewWithImage = {
      ...formData,
      image: formData.image || "https://randomuser.me/api/portraits/lego/1.jpg",
    };
    onSubmit(reviewWithImage);
    setFormData({ name: "", title: "", review: "", rating: 5, image: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-16 p-6 bg-gray-100 rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Add Your Review</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Review</label>
        <textarea
          name="review"
          value={formData.review}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md"
          rows="4"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Rating</label>
        <div className="flex text-orange-400 text-xl space-x-1">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => handleRatingClick(num)}
              className={
                formData.rating >= num ? "text-orange-500" : "text-gray-300"
              }
            >
              ★
            </button>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-xl shadow"
      >
        Submit Review
      </button>
    </form>
  );
};

const Review = () => {
  const [allReviews, setAllReviews] = useState(() => {
    const saved = localStorage.getItem("userReviews");
    return saved ? JSON.parse(saved) : initialTestimonials;
  });

  useEffect(() => {
    localStorage.setItem("userReviews", JSON.stringify(allReviews));
  }, [allReviews]);

  const handleAddReview = (newReview) => {
    setAllReviews((prev) => [...prev, newReview]);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-balance mb-14">
        Trusted by <span className="text-orange-500">5m+ users</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {allReviews.map((review, index) => (
          <TestimonialCard key={index} {...review} />
        ))}
      </div>
      <ReviewForm onSubmit={handleAddReview} />
    </div>
  );
};

export default Review;
