import { Component } from 'react';

const interestP = (
  <p>Food expert. Music scholar. Reader, Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffe fanatic.</p>
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