import React from "react";

import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assets } from "../assets/assets";
import { Minus, PenLine } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const testimonials = [
  {
    quote:
      "This app has made cooking so much easier for me. I love how it recommends recipes from the ingredients I already have!",
    name: "— A Happy Mom",
  },
  {
    quote:
      "Thanks to Mom’s Daily Kitchen, I no longer stress about planning meals every day!",
    name: "— Busy Working Mom",
  },
  {
    quote: "Absolutely love the suggestions and how quick it is to use.",
    name: "— Kitchen Enthusiast",
  },
];

const faqs = [
  {
    question: "How does the app suggest recipes?",
    answer:
      "The app uses AI to analyze the ingredients you enter and suggests recipes based on those items.",
  },
  {
    question: "Is this free to use?",
    answer: "Yes, Mom’s Daily Kitchen is completely free for users.",
  },
  {
    question: "Can I save my favorite recipes?",
    answer:
      "This feature is coming soon! You'll be able to bookmark and organize your favorite recipes.",
  },
];

const About = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="mr-2 ml-2   lg:min-h-[100px] flex items-center justify-center text-gray-400 px-4 py-40  mt-2 relative"
        //   style={{ backgroundImage: `url(${assets.foods})` }}
      >
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-4xl sm:text-5xl md:text-4xl font-serif text-center"
        >
          ABOUT{" "}
          <span className="text-black">
            US<hr></hr>
          </span>
        </motion.h1>
      </div>

      {/* Info Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="w-full flex justify-center bg-white text-gray-800 px-4"
      >
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <img
              src={assets.foods}
              alt="Delicious food"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 bg-yellow-50 p-6 md:p-8 rounded-lg shadow-md text-center lg:text-left">
            <p className="mb-5 text-base md:text-lg leading-relaxed text-gray-700">
              Mom’s Daily Kitchen is an AI-powered assistant that helps moms
              discover new recipes based on the ingredients they already have.
              It’s designed to make cooking easier, quicker, and more fun.
            </p>
            <ul className="list-disc list-inside text-base md:text-lg space-y-2 text-left text-gray-700">
              <li>Ingredient-based recipe suggestions</li>
              <li>Time-saving and easy to use</li>
              <li>Perfect for everyday cooking</li>
              <li>Made with love for moms</li>
            </ul>

            <div className="mt-6 flex justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#get-started"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition-all"
              >
                Get Started
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="w-full bg-gray-100 py-12 px-4 flex justify-center"
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 poppins-bold text-yellow-700">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            To make everyday cooking easier, joyful, and smarter by empowering
            moms with personalized recipe suggestions using the power of AI.
          </p>
        </div>
      </motion.div>

      {/* Inspiration Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="w-full bg-white py-12 px-4 flex justify-center"
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-yellow-700">
            Meet the Inspiration
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Mom’s Daily Kitchen was inspired by my mother’s passion for cooking
            and the daily challenge of deciding “what to cook today.” This tool
            is made with love to support moms like her with smart, helpful
            suggestions.
          </p>
        </div>
      </motion.div>

      {/* Testimonial Section - Slider */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="w-full shadow-md  py-12 px-4 flex justify-center"
      >
        <div className="max-w-2xl w-full">
          <Slider {...sliderSettings}>
            {testimonials.map((t, index) => (
              <div key={index} className="text-center px-4">
                <p className="italic text-lg text-gray-800">"{t.quote}"</p>
                <span className="block text-sm font-medium text-right mt-4 text-gray-700">
                  {t.name}
                </span>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>

      {/* Call-to-Action Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="mr-5 ml-5 mt-2 rounded-md bg-gray-400 py-16 px-4 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Join Our Community of Smart Cooks
        </h2>
        <p className="text-xl sm:text-2xl text-white mb-8">
          Become part of a growing community of moms who make cooking easier and
          more enjoyable every day.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#get-started"
          className="inline-block bg-white text-yellow-500 font-semibold py-4 px-8 rounded-lg shadow-lg transition-all text-xl"
        >
          Get Started Now
        </motion.a>
      </motion.div>

      {/* Interactive Timeline Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="w-full bg-gray-100 py-16 px-4 flex justify-center"
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-700 mb-8">
            Our Journey So Far
          </h2>
          <div className="space-y-8">
            <div className="timeline-item">
              <div className="flex justify-center items-center gap-6">
                <div className="w-15 h-15 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2022
                </div>
                <div className="flex-1 border-t-2 border-gray-300"></div>
              </div>
              <div className="text-xl text-gray-700 mt-4">
                <strong>
                  Launched the beta version of Mom's Daily Kitchen
                </strong>
              </div>
            </div>
            <div className="timeline-item">
              <div className="flex justify-center items-center gap-6">
                <div className="w-15 h-15 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2023
                </div>
                <div className="flex-1 border-t-2 border-gray-300"></div>
              </div>
              <div className="text-xl text-gray-700 mt-4">
                <strong>Reached 100K downloads</strong>
              </div>
            </div>
            <div className="timeline-item">
              <div className="flex justify-center items-center gap-6">
                <div className="w-15 h-15 bg-yellow-500  text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2024
                </div>
                <div className="flex-1 border-t-2 border-gray-300"></div>
              </div>
              <div className="text-xl text-gray-700 mt-4">
                <strong>Featured on TechCrunch and other tech blogs</strong>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="w-full bg-white py-12 px-4 flex justify-center"
      >
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-yellow-700">
            FAQs & Cooking Tips
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg text-gray-800">
                  Q: {faq.question}
                </h3>
                <p className="text-gray-700 mt-1">A: {faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Social Media Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="w-full bg-gray-100 py-10 px-4 flex justify-center"
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-700">
            Connect With Us
          </h2>
          <div className="flex justify-center gap-6 text-gray-700 text-2xl">
            <a href="https://facebook.com">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
            <a href="https://wa.me">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
