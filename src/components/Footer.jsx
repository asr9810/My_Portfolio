import React from 'react';
import me from '../image/m2.png';
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white py-8 px-4 text-center">
      <div className="founder mb-8">
        <img src={me} alt="Amit Singh Rawat" className="w-32 h-32 rounded-full mx-auto shadow-lg" />
        <h2 className="text-2xl mt-4">Amit Singh Rawat</h2>
        <p className="text-gray-400 mt-2 italic">"Innovate beyond the obvious, create beyond the limits."</p>
      </div>

      <aside className="social-media">
        <h2 className="text-xl mb-4">Connect with me</h2>
        <article className="flex justify-center space-x-6 text-3xl">
          <a href="https://github.com/asr9810?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/amit-singh-rawat-931734205/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
            <AiFillLinkedin />
          </a>
        </article>
      </aside>

      <a href="#home" className="text-white hover:text-gray-400 transition mt-8 block">
        <AiOutlineArrowUp className="text-4xl mx-auto mt-8 animate-bounce" />
      </a>
    </footer>
  );
};

export default Footer;
