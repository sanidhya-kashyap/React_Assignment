import React from 'react'
import img1 from "../images/sec1.png"
import img2 from "../images/sec2.png"
import img3 from "../images/sec3.png"
import img4 from "../images/sec4.png"

export const Section4 = () => {
    return (
        <div className="container">
            <h1 className="heading main">Why you should <span className="highlight">choose</span> <br /> our lessons?</h1>

            <div className="card-main">
            <div className="card">
                <img src={img1} className="card-img-top" alt=""/>
                <div className="card-body">
                <h4>Curabitur sed iaculis dolor</h4>
                <p className="card-text">Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan</p>
                </div>
            </div>
            <div className="card">
                <img src={img2} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h4>Ut ultricies imperdiet sodales</h4>
                    <p className="card-text">Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan</p>
                    
                </div>
            </div>
            <div className="card">
                <img src={img3} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h4>Aliquam fringilla <br /> aliquam amet</h4>
                    <p className="card-text">Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan</p>
                </div>
            </div>
            <div className="card">
                <img src={img4} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h4>Nulla mauris <br /> accumsan</h4>
                    <p className="card-text">Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan</p>
                </div>
            </div>
            </div>
            <button className="custom-btn read">Read more</button>
        </div>
        


    )
}
