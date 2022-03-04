import { Component } from 'react';


const aboutP = (
  <p> I am a frontend developer with a particular interest in making thinkgs simple and automating daily tasks. I try to keep up with security and best practices, abd always looking for new thinkgs to learn.</p>
);

class About extends Component {
  render() {
    return (
      <div className='about'>
        <h2 className='about_title'>About</h2>
        {aboutP}
      </div>
    );
  }
}

export default About