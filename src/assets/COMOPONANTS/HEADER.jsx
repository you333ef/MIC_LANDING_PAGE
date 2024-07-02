import React from 'react';
import './header.css';
import Audio from '../IMGS/Group 2.svg'
const HEADER = () => {
  return (
    <header>
    <div className="container ROWWOW">
<div className="up">
<img src={Audio} alt=""  className='img-up'/>


</div>
<div className="down-head">
<h3>Solar Panel Installers In Plymouth</h3>
<h5>Fueled is an award-winning technology consultancy that transforms<br/> businesses by generating ideas, building products, and accelerating<br/> growth.</h5>
<div className="buttons">
<button className='Call'>Call Us To day</button>
<button className='back'>Requst a call back</button>

</div>


</div>
    </div>
    </header>
  );
}

export default HEADER;
