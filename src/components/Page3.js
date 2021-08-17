import React from 'react'
import image1 from '../images/wrapbg1.jpg'
import '../App.css';

export const Page3 = () => {
    return (
        <div className="container">
  <div className="row">
    <div className="col col1">
      <img src={image1}  alt=""/>
    </div>
    <div className="col col2">
      <h1 className="heading">Special training <br /> for a school</h1>
      <p className="para" >Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere. Nunc urna libero, congue porta nibh a, semper feugiat sem.</p>
      <button className="custom-btn">Learn more</button>
    </div>
  </div>
</div>
    )
}
