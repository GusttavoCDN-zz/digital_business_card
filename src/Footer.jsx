import { Component } from 'react';
import './Footer.css';
import twitter from './images/twitter_icon.png';
import instagram from './images/instagram_icon.png';
import facebook from './images/facebook_icon.png';
import github from './images/gitHub_icon.png';


class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <img src={twitter} alt="Twitter Icone" />
        <img src={facebook} alt="Facebook Icone" />
        <img src={instagram} alt="Instagram Icone" />
        <img src={github} alt="Github Icone" />
      </div>
    );
  }
}

export default Footer