import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";
import me from "../image/me1.png";

const Home = () => {
  const clientcount = useRef(null);
  const projectcount = useRef(null);
  const animationClientCount = ()=>{
    animate(0, 10,{
      duration:1,
      onUpdate:(v)=>(clientcount.current.textContent = v.toFixed())

    })
  }
  const animationProjectsCount = ()=>{
    animate(0, 15,{
      duration:1,
      onUpdate:(v)=>(projectcount.current.textContent = v.toFixed())

    })
  }

  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      {/* Detail section */}
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hi, I Am <br /> Amit Rawat
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:amitrawat9810@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +<motion.span whileInView={animationClientCount} ref={clientcount}></motion.span>
            </p>
            <span>Clients worldwide</span>
          </article>

          <aside>
            <article>
              <p>
                +<motion.span ref={projectcount} whileInView={animationProjectsCount}>15</motion.span>
              </p>
              <span>Projects Made</span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>amitrawat9810@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      {/* image section */}
      <section>
        <img src={me} alt="" />
      </section>
      <SlArrowDown />
    </div>
  );
};

export default Home;
