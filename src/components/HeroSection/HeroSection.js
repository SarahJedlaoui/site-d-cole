import React from 'react';
import { Button } from '../button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/*<video src='./videos/video-1.mp4' autoPlay loop muted />*/}
      <h1>ISED</h1>
      <p>L'INSTITUT SUPERIEUR
        DE L'ENSEIGNEMENT A DISTANCE</p>
      <div className='hero-btns'>
        <Button href='/'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          DECOUVRIR PLUS
        </Button>
        

      </div>
       <div className='hero-parag'>
         <h3>Présentation générale</h3>
           <h4>
              La formation continue en utilisant, en particulier les moyens d'enseignement à distance, a pour but essentiel d'ouvrir de nouveaux horizons à tous les enseignants du Ministère de l'Education et  aux fonctionnaires de l'état &nbsp; et du secteur privé de se mettre à niveau dans &nbsp; leur discipline et acquérir de nouvelles compétences en &nbsp;maîtrisant les technologies récentes&nbsp; de l'information et de la comunication.&nbsp; Ceci ne peut &nbsp; qu'améliorer la qualité &nbsp;de l'enseignement dans nos écoles, collèges et lycées et ne peut qu'augmenter la productivité et l'efficacité des employés ayant suivi cette formation.
          </h4>

      </div>
    </div>
  );
}

export default HeroSection;