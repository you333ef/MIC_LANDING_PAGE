import React from 'react';
import './trade.css';
import IMGTWICE from '../IMGS/Group 3.svg';
import instd from '../IMGS/Rectangle 30.png'

const TRADE = () => {
  return (
   <section className="container">
      <div className="SECTION-FLEX row">
      
        <div className="Section-left col-xs-12 col-lg-6">
          <h2>The Friendliest Installers in<br/> the South-West</h2>
          <p>At Solidarity Solar our aims are to help our customers towards a sustainable future and genuinely care about the quality of products we use for our installs. We never sell you equipment you don't need and will always advise to the best of our ability, No hard sell or pushy sales tactics ever. We take pride in our work and do our best to make sure that we meet, or exceed, our customers' expectations.</p>
          <div className="ALL-OPTIONS">
            <h5><span>01 /</span> Collaborate with 100+ leading</h5>
            <h5><span>02 /</span> 100+ leading universities and companies</h5>
            <h5><span>03 /</span> leading universities and companies</h5>
            <h5><span>04 /</span> universities and companies</h5>
          </div>
          
        </div>
        <div className="Section-right col-xs-12 col-lg-6">
          <img src={IMGTWICE} alt="Group 3" className='IMGTWICE' />
        
        </div>
      </div>
   </section>
  );
}

export default TRADE;
