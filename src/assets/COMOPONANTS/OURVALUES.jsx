import React from 'react';
import './ourvalues.css';
import HANDY from '../IMGS/Customer .svg';
import PRISEE from '../IMGS/Price Tag.svg';
import EARTH from '../IMGS/Environment.svg';
const OURVALUES = () => {
  return (
   <section className='VALUES'>
    <h3 className='text-center TITLLEVALUE'>Our values</h3>
    <p className='text-center paragraph'>More than 3000 users have been helped by World Online Course.</p>
<div className="container">
<div className="row ROWVALUE">
<div className="col-lg-3 col-sm-10 col-md-12 Customer">
<img src={HANDY} alt="HANDY" />
<div className="">
<h4>Customer Care</h4>
<p>We're here to help you with solar panel installation in Devon and Cornwall. If we were to sum ourselves up in a few words, those would be "reliable, honest and friendly." We find our customers agree! We're with you from the start of the project to the finish.</p>
</div>
</div>
<div className="col-lg-3 col-sm-10 col-md-12 PRISEE">
<img src={PRISEE} alt="PRISEE" />
<h4>Price</h4>
<p>As I'm sure you'll have seen, solar systems don't tend to come cheap. Our aim is to make solar power accessible to everyone, so we price ourselves in a way that makes solar energy more affordable. We're focused on helping you and on helping the environment, rather than on turning a profit.</p>
</div>
<div className="col-lg-3 col-sm-10 col-md-12 EARTH">
<img src={EARTH} alt="EARTH" />
<div className="">
<h4>Sustainability</h4>
<p>As we've said, we do this because we truly care about the planet and about seeing people embrace a greener, more eco-friendly approach to power. The world of green energy can be jargon-filled and opaque, so we want to help educate people on the big and little things they can do to protect our planet!</p>
</div>

</div>


</div>
</div>
   </section>
  );
}

export default OURVALUES;
