// import React, { useRef, useState } from "react";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// import { motion } from "framer-motion";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
// };
// function Contact() {
//   const submitBtnRef = useRef(null);
//   const [buttonText, setButtonText] = useState("Contact Us");
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   return (
//     <>
//       <div className="min-h-screen items-center justify-center px-4 mt-45">
//         <div>
//           <motion.h1
//             className="text-center mb-8 text-5xl font-serif font-medium prata-regular"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             transition={{ duration: 0.6 }}
//           >
//             Get in Touch
//           </motion.h1>
//           <motion.p className="text-center mb-5 md:text-xl text-sm font-serif italic"
//               initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             transition={{ duration: 0.6 }}
//           >
//             We'd love to hear from you. Send us a message and we'll respond as
//             soon as possible
//           </motion.p>
//         </div>
//         <motion.div className="flex items-center justify-center"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             transition={{ duration: 0.6 }}
//         >
//           <div className="grid sm:grid-cols-2 gap-10 w-full max-w-6xl items-center">
//             {/* Contact Form Section */}
//             <div className="w-full max-w-md">
//               <form
//                 className="flex flex-col mt-10"
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   const form = e.target;
//                   const name = form[0].value.trim();
//                   const phone = form[1].value.trim();
//                   const email = form[2].value.trim();
//                   const message = form[3].value.trim();

//                   if (!name || !phone || !email || !message) {
//                     alert("Please fill in all fields.");
//                     return;
//                   }

//                   setIsLoading(true);
//                   setButtonText("Submitted");
//                   setIsSubmitted(false);

//                   setTimeout(() => {
//                     setIsLoading(false);
//                     setIsSubmitted(true);
//                     alert("Your form has been submitted successfully!");
//                     form.reset();
//                     setTimeout(() => {
//                       setIsSubmitted(false);
//                       setButtonText("Contact Us");
//                     }, 2000);
//                   }, 2000);
//                 }}
//               >
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="placeholder:text-blue-950 border-b p-2 mb-6"
//                   required
//                 />
//                 <input
//                   type="tel"
//                   placeholder="Phone"
//                   className="placeholder:text-blue-950 border-b p-2 mb-6"
//                   required
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="placeholder:text-blue-950 border-b p-2 mb-6"
//                   required
//                 />
//                 <textarea
//                   placeholder="Message"
//                   className="placeholder:text-blue-950 border-b p-2 mb-6"
//                   required
//                 ></textarea>
//                 <button
//                   type="submit"
//                   className="bg-blue-950 text-white text-2xl font-mono font-bold rounded hover:scale-105 duration-700 shadow-lg p-2 mb-6 flex justify-center items-center gap-2"
//                 >
//                   {isLoading ? (
//                     <svg
//                       className="animate-spin h-6 w-6 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//                       ></path>
//                     </svg>
//                   ) : isSubmitted ? (
//                     <>✅ {buttonText}</>
//                   ) : (
//                     buttonText
//                   )}
//                 </button>
//               </form>
//             </div>

//             {/* Contact Info Section */}
//             <div className="w-full max-w-md sm:mt-0 mt-10">
//               <h1 className="text-3xl text-blue-950 font-medium text-left">
//                 Contact Info
//               </h1>
//               <h3 className="text-2xl text-blue-950 mt-4 mb-10 text-left">
//                 hi@green.com
//               </h3>

//               <h1 className="text-3xl text-blue-950 font-medium text-left mt-10">
//                 Based in
//               </h1>
//               <h3 className="text-2xl text-blue-950 mt-4 text-left">
//                 New York, <br /> California, Ohio
//               </h3>

//               <div className="flex gap-10 mt-5 justify-start">
//                 <a
//                   href="https://facebook.com/yourpage"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-900 hover:text-blue-950 text-3xl hover:scale-105 duration-500"
//                 >
//                   <FaFacebook />
//                 </a>
//                 <a
//                   href="https://twitter.com/yourprofile"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-800 hover:text-blue-950 text-3xl hover:scale-105 duration-500"
//                 >
//                   <FaTwitter />
//                 </a>
//                 <a
//                   href="https://instagram.com/yourprofile"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-800 hover:text-blue-950 text-3xl hover:scale-105 duration-500"
//                 >
//                   <FaInstagram />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </>
//   );
// }

// export default Contact;


import React, { useRef, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function Contact() {
  const submitBtnRef = useRef(null);
  const [buttonText, setButtonText] = useState("Contact Us");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form[0].value.trim();
    const phone = form[1].value.trim();
    const email = form[2].value.trim();
    const message = form[3].value.trim();

    if (!name || !phone || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    setButtonText("Submitting...");

    try {
      const response = await fetch("https://mom-skitchen-02.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, email, message }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const result = await response.json();
      console.log(result.message); // Optional

      setIsSubmitted(true);
      setButtonText("Submitted ✅");
      form.reset();

      setTimeout(() => {
        setIsSubmitted(false);
        setButtonText("Contact Us");
      }, 2000);
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
      console.error(error);
      setButtonText("Try Again");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen items-center justify-center px-4 mt-45">
      {/* Heading */}
      <motion.h1
        className="text-center mb-8 text-5xl font-serif font-medium prata-regular"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h1>
      <motion.p
        className="text-center mb-5 md:text-xl text-sm font-serif italic"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        We'd love to hear from you. Send us a message and we'll respond as soon
        as possible.
      </motion.p>

      {/* Form + Contact Info */}
      <motion.div
        className="flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <div className="grid sm:grid-cols-2 gap-10 w-full max-w-6xl items-center">
          {/* Contact Form Section */}
          <div className="w-full max-w-md">
            <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="placeholder:text-blue-950 border-b p-2 mb-6"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                className="placeholder:text-blue-950 border-b p-2 mb-6"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="placeholder:text-blue-950 border-b p-2 mb-6"
                required
              />
              <textarea
                placeholder="Message"
                className="placeholder:text-blue-950 border-b p-2 mb-6"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-blue-950 text-white text-2xl font-mono font-bold rounded hover:scale-105 duration-700 shadow-lg p-2 mb-6 flex justify-center items-center gap-2"
              >
                {isLoading ? (
                  <svg
                    className="animate-spin h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                ) : (
                  buttonText
                )}
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="w-full max-w-md sm:mt-0 mt-10">
            <h1 className="text-3xl text-blue-950 font-medium text-left">
              Contact Info
            </h1>
            <h3 className="text-2xl text-blue-950 mt-4 mb-10 text-left">
              hi@green.com
            </h3>
            <h1 className="text-3xl text-blue-950 font-medium text-left mt-10">
              Based in
            </h1>
            <h3 className="text-2xl text-blue-950 mt-4 text-left">
              New York, <br /> California, Ohio
            </h3>

            <div className="flex gap-10 mt-5 justify-start">
              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 hover:text-blue-950 text-3xl hover:scale-105 duration-500"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:text-blue-950 text-3xl hover:scale-105 duration-500"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:text-blue-950 text-3xl hover:scale-105 duration-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
