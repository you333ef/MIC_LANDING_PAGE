import React from 'react';
import './repairs.css';
import Department from '../IMGS/DEPARTMENT.svg';

const Repairs = () => {
  return (
    <section>
      <div className="Repair-ground">
        <div className="Botn-Ground container d-flex justify-content-center align-items-center">         
          <div className="text-center Over col-12 col-md-10 col-lg-8">
            <h2>Repairs Over Replacement</h2>
            <p>
              We approach every aspect of our business with sustainability in mind. That's why we believe it's always worth trying to fix a system before outright replacing it, wherever possible – it requires fewer materials and is easier on the planet, as well as your wallet! If another company tells you that your system needs to be replaced, just give us a call and we'll see if we can repair it first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Repairs;
