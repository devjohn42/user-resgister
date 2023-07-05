import React from "react";

import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

import discord from "/discord.svg";

const link = "text-3xl text-principal";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full bg-content py-5 flex items-center justify-around drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
      <div className="flex gap-8">
        <a href="#" className={link}>
          <FaLinkedin />
        </a>
        <a href="#" className={link}>
          <FaGithub />
        </a>
        <a href="#" className={link}>
          <FaInstagram />
        </a>
        <a href="#" className={link}>
          <FaTwitter />
        </a>
      </div>
      <h1 className="text-principal font-primary font-bold text-xl">
        Developed by DevJohn
      </h1>
      <a href="https://discord.com/" target="blank">
        <img src={discord} alt="" className="w-[170px]" />
      </a>
    </footer>
  );
}
