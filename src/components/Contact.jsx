import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Garv Gupta",
          from_email: form.email,
          to_email: "garvgupta6778@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Transmission received successfully. Connection established.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Transmission failed. Please check network routing metrics.");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText} text-sm`}>System Inquiries</p>
        <h2 className={`${styles.sectionHeadText} mt-2 mb-6`}>Get in Touch</h2>

        {/* Contact Info Block */}
        <div className="flex flex-col gap-10 font-sans text-base">
          <div className="flex flex-col gap-2">
            <span className="text-zinc-500 uppercase font-semibold text-xs tracking-widest">Email Endpoint</span>
            <span className="text-zinc-200 hover:text-white transition-colors text-base font-medium">
              garvgupta6778@gmail.com
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-zinc-500 uppercase font-semibold text-xs tracking-widest">Direct Contact</span>
            <span className="text-zinc-200 hover:text-white transition-colors text-base font-medium">
              +91 7014145314
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-zinc-500 uppercase font-semibold text-xs tracking-widest">Network Directory</span>
            <div className="flex gap-x-4 gap-y-2 mt-1 text-md whitespace-nowrap font-medium">
              <a
                href="https://github.com/notgarv01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-white"
              >
                GitHub / notgarv01
              </a>
              <span className="text-zinc-800 hidden sm:inline">|</span>
              <a
                href="https://linkedin.com/in/garv-gupta-04b431316"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-white"
              >
                LinkedIn / garv-gupta-04b431316
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const ContactComponent = () => <Contact />;
export default SectionWrapper(ContactComponent, "contact");
