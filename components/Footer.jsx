import style from "../styles/Footer.module.css";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import Link from "next/link";
const Footer = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const time = current.getHours() + ":" + current.getMinutes();
  return (
    <div className={style.footer}>
      <div>
        <p className={style.find}>Wanna talk?:</p>
        <a
          href="https://www.linkedin.com/in/sriram-kidambi-3b5b51218/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <BsLinkedin />
          </span>
        </a>
        <a
          href="https://github.com/0xrama"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <BsGithub />
          </span>
        </a>
        <a
          href="https://twitter.com/0xrama"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <BsTwitter />
          </span>
        </a>
        <a 
        href="https://instagram.com/0xram"
        target="_blank"
        rel="noopener noreferrer"
        >
          <span>
            <BsIntagram />
          </span>
        </a>
      </div>
      <div>{time + " | " + date}</div>
    </div>
  );
};

export default Footer;
