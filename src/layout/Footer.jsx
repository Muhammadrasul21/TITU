import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#495693] p-8 text-white">
      <div className="flex container sm:flex-row flex-col gap-4 justify-between">
        <div className="flex">
        <img src={logo} alt="Logo" className="w-20 h-20" />
        <div className="flex flex-col w-70 gap-2">
          <p className="text-[18px]">
            TOSHKENT IQTISODIYOT VA TEXNOLOGIYALAR UNIVERSITETI
          </p>
          <p>
            Toshkent shahri Chilonzor tumani Cho‘ponota MFY, Kichik xalqa yo‘li
            ko‘chasi 50-uy
          </p>
          <p>Call center: +998 97 270 10 00</p>
          <p>E-mail: uztitu@mail.uz</p>
        </div>
        </div>
        <ul className="flex flex-col gap-2 text-xl">
          <li>Universitet haqida </li>
          <li>Adminstratsiya</li>
        </ul>
        <p className="text-xl">Bo'limlar</p>
         <iframe
         className="rounded-2xl w-full sm:w-[500px]"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d95924.8965148887!2d72.1592087!3d40.7932394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc97ee0f9de061%3A0x4f90abf5589f0cf7!2sOltinko'l%20dexqon%20bozori!5e0!3m2!1sen!2s!4v1720262600000!5m2!1sen!2s"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Oltinko'l Dexqon Bozori"
      ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
