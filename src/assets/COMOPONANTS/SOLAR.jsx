import React, { useState } from 'react';
import Modal from 'react-modal';
import './solar.css';
import HouseOne from '../IMGS/solar-panels-meadow 2 (2).png';
import HouseTwo from '../IMGS/solar-panels-meadow 2 (1).png';
import HouseThree from '../IMGS/solar-panels-meadow 2.png';
import Icon from '../IMGS/Icon.svg';

const SOLAR = () => {
  const [highlighted, setHighlighted] = useState('');
  const handleClick = (id) => {
    if (highlighted === id) {
      setHighlighted('');
    } else {
      setHighlighted(id);
    }
  };

  return (
    <section className='SOLLAR'>
      <div className="container SOLARTITLE">
        <h4 className='text-center '>Solar Kits</h4>
        <p className='text-center EE'>Complete solar system kits, ready for installation. They can be used to supplement on-grid housing, a complete self-sustaining home or some combination of the two.</p>
        <div className="row SECTIONS">
          <div className="col-lg-4 col-md-12 col-sm-12 LL">
            <img src={HouseOne} alt="" className={`myImage ${highlighted === 'HouseOne' ? 'highlight' : ''}`} onClick={() => handleClick('HouseOne')} />
            <h5>Off Grid</h5>
            <p>WOC has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation,</p>
            <h6 >View Products  <img src={Icon} alt="" /></h6>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 LL">
            <img src={HouseTwo} alt="" className={`myImage ${highlighted === 'HouseTwo' ? 'highlight' : ''}`} onClick={() => handleClick('HouseTwo')} />
            <h5>On Grid</h5>
            <p>WOC has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation,</p>
            <h6 >View Products <img src={Icon} alt="" /></h6>
          </div>
          <div className="col-lg-4 col-md-12  col-sm-12 LL">
            <img src={HouseThree} alt="" className={`myImage ${highlighted === 'HouseThree' ? 'highlight' : ''}`} onClick={() => handleClick('HouseThree')} />
            <h5>Hybrid</h5>
            <p>WOC has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation,</p>
            <h6  >View Products <img src={Icon} alt="" /></h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SOLAR;
