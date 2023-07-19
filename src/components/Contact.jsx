import React, { useState } from "react";
import vg from "../image/vg.png";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import {addDoc, collection} from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [disableBtn, setDisableBtn] = useState();

  // const[data, setData] = useState(false)

  const submitHandler = async(e) => {
    e.preventDefault();
    setDisableBtn(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
      });
      toast.success("Message Sent");
      setDisableBtn(false);
    } catch (error) {
      toast.error("Error");
      console.log(error);
      setDisableBtn(false);
    }
    
    setName("");
    setEmail("");
    setMessage("");
  };
  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: "0",
        opacity: 1,
      },
      transition: {
        dealy: 0.5,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: "0",
        opacity: 1,
      },
      transition: {
        delay: 0.4,
      },
    },
  };

  return (
    <div id="contact">
      <section>
        <motion.form action="" onSubmit={submitHandler} {...animations.form}>
          <h2>Contact Me</h2>
          <input
            type="text"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="text"
            placeholder="Message"
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <motion.button
            disabled={disableBtn}
            className={disableBtn ? "disableBtn" : ""}
            {...animations.button}
            type="submit"
          >
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="" />
      </aside>
    </div>
  );
};

export default Contact;
