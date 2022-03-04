import { Component } from 'react';
import './About_Interests.css';

const interestP = (
  <p>Curioso por natureza. Apaixonado por cultura geek, nerd, otaku. Eximio esportista e um repositorio de informações aleatorias sobre o mundo.</p>
);
class Interests extends Component {
  render() {
    return (
      <div className='interests'>
        <h2 className='interests_title'>Interests</h2>
        {interestP}
      </div>
    );
  }
}

export default Interests