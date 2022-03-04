import { Component } from "react";
import './About_Interests.css';

const aboutP = (
  <p>
    Estudante de Desenvolvimento Web e Engenharia de Software nas escolas Trybe
    e 42SP. Apaixonado por tecnologia e conhecimento o cara que sempre esta a
    procura de solução para os problemas.
  </p>
);

class About extends Component {
  render() {
    return (
      <div className="about">
        <h2 className="about_title">About</h2>
        {aboutP}
      </div>
    );
  }
}

export default About;
