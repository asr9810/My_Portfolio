import React from "react";
import { delay, motion } from "framer-motion";
import ReactImg from "../image/react.png";
import ReduxImg from "../image/redux.png";
import JavaScriptImg from "../image/JavaScript-logo.png";
import HtmlImg from "../image/html.png";
import cssImg from "../image/css.png";
import tailwindImg from "../image/Tailwind_CSS_Logo.svg.png";
import { SiCss3, SiTailwindcss, SiRedux } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";

const Skill = () => {
    const animations = {
        whileInView:{
            x:0,
            y:0,
            opacity:1,
        },
        one:{
            opacity: 0,
            x:"-100%",
        },
        twoAndThree:{
            opacity: 0,
            y:"-100%",
        },
        four:{
            opacity: 0,
            y:"+100%",
        },
        
    }


  return (
    <div id="skills">
      <h2>Skills</h2>
      <section>
        <motion.div className="skillBox1" whileInView={animations.whileInView} initial={animations.one}>
          <div className="svg">
            <TbBrandJavascript />
          </div>
          <p>JAVASCRIPT</p>
        </motion.div>
        <motion.div className="skillBox2" whileInView={animations.whileInView} initial={animations.twoAndThree}>
        <div className="svg">
          <SiTailwindcss />
          </div>
          <p>TAILWIND CSS</p>
        </motion.div>
        <motion.div className="skillBox3" whileInView={animations.whileInView} initial={animations.twoAndThree} transition={{delay: 0.2}}>
          <div className="html-css svg">
            <AiFillHtml5 />
            <SiCss3 />
          </div>
          <p>HTML & CSS</p>
        </motion.div>
        <motion.div className="skillBox4" whileInView={animations.whileInView} initial={animations.four}>
        <div className="svg">
          <FaReact />
          <SiRedux />
          </div>
          <p>REACTJS WITH REDUX</p>
        </motion.div>
      </section>
    </div>
  );
};

export default Skill;
