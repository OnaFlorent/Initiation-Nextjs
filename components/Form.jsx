"use client";
import React, { useRef, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai"; 
import { motion } from "framer-motion"; 

const Form = () => {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setSubmitted(true);
        formRef.current.reset();
      } else {
        console.error("Submission failed:", res);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-4">
      <input
        required
        type="text"
        name="name"
        className="input"
        placeholder="Nom et prénom"
      />
      <input
        required
        type="email"
        name="email"
        className="input"
        placeholder="Adresse e-mail"
      />
      <input
        required
        type="text"
        name="phone"
        className="input"
        placeholder="Numéro de téléphone"
      />
      <textarea
        required
        name="message"
        className="textarea mb-2"
        placeholder="Votre message"
      />
      <button
        type="submit"
        className="btn self-start flex items-center gap-2"
        disabled={submitted}
      >
        {submitted ? (
          <motion.div
            className="flex justify-center items-center w-full h-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <AiOutlineCheckCircle className="text-white text-3xl" />
          </motion.div>
        ) : (
          "Envoyer le message"
        )}
      </button>
    </form>
  );
};

export default Form;
