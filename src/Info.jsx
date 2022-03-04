import { Component } from "react";
import './Info.css';
import myImage from "./images/pikachu.jpg";
import emailIcon from "./images/email.svg";
import linkedinIcon from "./images/linkedin.png";

const photo = (
  <figure>
    <img className="my_photo" src={myImage} alt="Foto mostrando o Gustavo" />
  </figure>
);

const myName = <h1 className="my_name">Gustavo da Silva</h1>;

const myRole = (
  <h3 className="my_role">Web Development and Softwer Engineer Student</h3>
);

const github = (
  <a className="my_site" href="https://github.com/gusttavocdn">
    github.com/gusttavocdn
  </a>
);

const buttons = (
  <div className="buttons_div">
    <a
      href="https://www.linkedin.com/in/gustavocdn/"
      target="_blank"
      className="email"
      rel="noreferrer"
    >
      <img className="email_icon" src={emailIcon} alt="Email Icone"></img>Email
    </a>
    <a
      href="https://www.linkedin.com/in/gustavocdn/"
      target="_blank"
      className="linkedin"
      rel="noreferrer"
    >
      <img className="linkedin_icon" src={linkedinIcon} alt="Linkedin Icone" ></img> Linkedin
    </a>
  </div>
);

class Info extends Component {
  render() {
    return (
      <div className="info">
        {photo}
        {myName}
        {myRole}
        {github}
        {buttons}
      </div>
    );
  }
}

export default Info;
