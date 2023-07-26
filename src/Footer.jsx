import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>
        Made with <span className="text-red-500">&hearts;</span> by Fernando
      </p>
      <a
        href="https://github.com/lfwzk"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white"
      >
        <FaGithub size={24} />
      </a>
    </footer>
  );
};

export default Footer;
