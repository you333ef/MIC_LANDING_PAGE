import React from 'react';
import './what.css';
import TANSSES from '../IMGS/“.svg';
import PoinTs from '../IMGS/POINT.svg';
import PERSONAL from '../IMGS/EDITED-27 - Copy 1.svg';

const WHAT = () => {
  return (
    <section className="what-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-10 col-md-10 left-content">
            <img src={TANSSES} alt="TANSSES" className='tansses-img' />
            <h2>What they say<br /> about WOC</h2>
            <p>More than 3000 users have been helped by<br /> World Online Course.</p>
          </div>
          <div className="col-lg-7 col-sm-10 col-md-10 right-content">
            <div className="testimonial-header">
              <h5>What they say</h5>
              <img src={PoinTs} alt="Points" className="points-img" />
            </div>
            <h4>“Studying at WOC is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.”</h4>
            <div className="testimonial-author">
              <img src={PERSONAL} alt="Author" className="author-img" />
              <div>
                <div className="author-name">Resky Fernanda</div>
                <div className="author-title">Product Designer at Tokopedia</div>
              </div>
            </div>
            <div className="testimonial-controls">
              <button className="control-btn">&lt;</button>
              <button className="control-btn">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WHAT;
