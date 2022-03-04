import { Component } from "react";
import myImage from "./images/eu.jpg";

const photo = (
  <figure>
    <img className="my_photo" src={myImage} alt="Foto mostrando o Gustavo" />
  </figure>
);

const myName = <h1 className="my_name">Gustavo da Silva</h1>;
const myRole = (
  <h2 className="my_role">Web Development and Softwer Engineer Student</h2>
);
const github = (
  <a className="my_site" href="https://github.com/gusttavocdn"></a>
);

class Info extends Component {
  render() {
    return (
      <div className="info">
        {photo}
        {myName}
        {myRole}
        {github}
      </div>
    );
  }
}

export default Info;
