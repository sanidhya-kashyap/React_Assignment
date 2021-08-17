import React from 'react'
import sql from "../images/sql.png"
import html from "../images/html.png"

export const Training = () => {
    return (
        <div>
            <div className="training">
                <div className="train-left">
                    <img src={html} alt="" />
                    <h3>Front-end <br />web development</h3>
                    <div className="inner-content">
                        <p>
                            Curabitur sed iaculis dolor, non congue ligula.
                            Maecenas imperdiet ante eget hendrerit posuere.
                            Nunc urna libero, congue porta nibh a, semper feugiat sem.
                        </p>
                        <button className="btn-own">Learn more</button>
                    </div>
                </div>
                <div className="train-right">
                    <img src={sql} alt="" />
                    <h3>SQL database for <br />begineers</h3>
                    <div className="inner-content">
                        <p>
                            Curabitur sed iaculis dolor, non congue ligula.
                            Maecenas imperdiet ante eget hendrerit posuere.
                            Nunc urna libero, congue porta nibh a, semper feugiat sem.
                        </p>
                        <button className="btn-own">Learn more</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
