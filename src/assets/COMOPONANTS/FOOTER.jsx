import React from 'react';
import './footer.css';
import plurPhoto from '../IMGS/image 8.svg';

const FOOTER = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 d-flex align-items-center mb-3 mb-md-0 trtr">
            <img src={plurPhoto} alt="Logo" className="mr-3 center-on-mobile" id='plurPhoto'/>
            <ul className="list-unstyled d-flex mb-0 d-none d-md-flex">
              <li className="mr-3"><a href="" className="text-white">About</a></li>
              <li className="mr-3"><a href="" className="text-white">Careers</a></li>
              <li className="mr-3"><a href="" className="text-white">Press</a></li>
              <li className="mr-3"><a href="" className="text-white">Customer Care</a></li>
              <li><a href="" className="text-white">Services</a></li>
            </ul>
          </div>
          <div className="col-md-6 text-md-right">
            <p className="mb-2">Get the freshest news from us</p>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Your email address..." />
              <div className="input-group-append">
                <button className="btn btn-subscribe" type="button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        <div className="row">
          <div className="col-md-6 text-secondary">
            <ul className="list-inline mb-0 text-center text-md-left">
              <li className="list-inline-item"><a href="" className="text-secondary">Terms & Conditions</a></li>
              <li className="list-inline-item"><a href="" className="text-secondary">Privacy Policy</a></li>
              <li className="list-inline-item"><a href="" className="text-secondary">Accessibility</a></li>
              <li className="list-inline-item"><a href="" className="text-secondary">Legal</a></li>
            </ul>
          </div>
          <div className="col-md-6 text-center text-md-right text-secondary">
            <p className="mb-0">&copy; 2023 - Solidarity Solar Ltd</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FOOTER;
