import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast"

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_tw7ccsd",   
        "template_znhsavn",  
        form.current,
        "Z-Ib5DbrAj1DJTbCL"   
      )
      .then(
        (result) => {
          console.log(result.text);
          // setStatus("Message sent successfully!");
          toast.success("Message sent successfully!")
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          // setStatus("Failed to send message. Try again.");
          toast.error("Failed to send message. Try again.")
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="mt-5 px-4 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold mb-6"
      >
        Contact
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.form
          ref={form}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="card p-6 rounded-lg flex flex-col gap-3"
          onSubmit={sendEmail}
        >
          <input
            name="name"
            className="p-3 rounded-md bg-transparent border border-slate-700"
            placeholder="Your name"
            required
          />
          <input
            name="email"
            className="p-3 rounded-md bg-transparent border border-slate-700"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            className="p-3 rounded-md bg-transparent border border-slate-700"
            placeholder="Message"
            rows={3}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 rounded-md bg-slate-800 hover:shadow-glow-sm hover:scale-105 transition-all duration-300 text-white"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {/* {status && <p className="text-sm mt-2">{status}</p>} */}
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="card p-6 rounded-lg"
        >
          <h3 className="font-semibold">Let's connect</h3>
          <p className="text-sm text-slate-400 mt-2">
            Email: sheikmohamedanzar@gmail.com
          </p>
          <p className="text-sm text-slate-400 mt-1">Location: Bangalore, India</p>

          {/* <div className="mt-4 flex gap-3">
            <a
              href="#"
              className="px-3 py-2 rounded-md border border-slate-700"
            >
              GitHub
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md border border-slate-700"
            >
              LinkedIn
            </a>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
