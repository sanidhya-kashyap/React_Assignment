import React from 'react'

export const Footer = () => {
    return (
        <div>
            <div className="footer-area">
                <div className="footer-content">
                    <div className="subscribe">
                        <h3>Subscribe to our <br /><span>Newsletter</span></h3>
                        <input type="text" placeholder="Your email"/> 
                        <button className="btn-own">Sign up</button>

                    </div>
                    <div className="copyright">
                        <hr />
                        <p>© 2021 Assignment | Sanidhya Kashyap | Developed by using React.Js</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
