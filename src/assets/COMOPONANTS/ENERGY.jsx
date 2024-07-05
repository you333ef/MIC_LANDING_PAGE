import React from 'react';
import './energy.css';
import iconff from '../IMGS/Featured icon.svg';
import iconPhoto from '../IMGS/Frame 89.svg';
import IcoOn from '../IMGS/Icon.svg'

const ENERGY = () => {
  return (
    <section className='ENERGY-PARENT'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-10 mb-4">
            <img src={iconff} alt="iconff" className="img-fluid" />
            <h3>Energy Innovators<br /> - the products we<br /> love</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Suspendisse suspendisse tempor et ipsum sit egestas nunc. Diam in cum a in.</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10 mb-4">
            <div className="card p-3 border-success">
              <img src={iconPhoto} alt="" className="iconPhoto img-fluid" />
              <h5>SoliTek - The European<br /> Manufacturer of Solar Panels</h5>
              <p>We work closely importing solar panels from Solitek, they offer 30 year warranties on their panels and are constantly coming up with new ideas - including their <span>solar greenhouse</span>.</p>
              <h4>View integration <img src={IcoOn} alt="#" id='IcoOn' /></h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10 mb-4">
            <div className="card p-3 border-success">
              <img src={iconPhoto} alt="" className='iconPhoto img-fluid' />
              <h5>Sunsynk - No Power No<br />Problem</h5>
              <p>Sunsynk build the most versatile hybrid<br /> inverter on the market, designed to take<br /> up to 7kW of solar on a standard<br />domestic supply - for simultaneous<br /> battery charging and household usage.</p>
              <h4>View integration <img src={IcoOn} alt="#" id='IcoOn' /></h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10 mb-4 d-none d-lg-block">
            {/* Empty div for layout spacing in large screens */}
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10 mb-4">
            <div className="card p-3 border-success">
              <img src={iconPhoto} alt="" className='iconPhoto img-fluid' />
              <h5>Sunsynk - No Power No<br />Problem</h5>
              <p>Sunsynk build the most versatile hybrid<br /> inverter on the market, designed to take<br /> up to 7kW of solar on a standard<br />domestic supply - for simultaneous<br /> battery charging and household usage.</p>
              <h4>View integration <img src={IcoOn} alt="#" id='IcoOn' /></h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10 mb-4">
            <div className="card p-3 border-success">
              <img src={iconPhoto} alt="" className='iconPhoto img-fluid' />
              <h5>REC - Solar's Most Trusted</h5>
              <p>REC - Renewable Energy Corporation, are one of the longest trading names in solar. They know how to be truly sustainable in this industry - their panels are 100% lead free and have the most trusted warranty in solar.</p>
              <h4>View integration <img src={IcoOn} alt="#" id='IcoOn' /></h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ENERGY;
