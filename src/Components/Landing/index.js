import React from 'react';
import './styles.scss';
import landing from '../../assets/images/landing.png';

function Landing() {
  return (
    <div className='landing'>
      <section className='container'>
        <img id='image' src={landing} alt='sorry:{('></img>
        <div className='text'>Jaldi De</div>
        <div className='tagline'>Empowering small businesses</div>
      </section>
    </div>
  );
}

export default Landing;
