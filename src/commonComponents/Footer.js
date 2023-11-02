import React from "react";

export default function Footer () {
    return (
        <>
            <div id="hireMe" className="back">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-center flex-column py-8">
                        <h6>
                            Want to create something <i><b>amazing</b></i>?
                        </h6>
                        <a
                            className="footer-link"
                            href="mailto:info@meoneeb.com"
                            target="_blank"
                        >
                            <h3>info@meoneeb.com</h3>
                        </a>
                    </div>
                </div>
            </div>
            <div
                className="back d-flex flex-wrap gap-0"
                style={{
                    backgroundColor: '#1e1e1e',
                    color: '#fff'
                }}
                >
                    <a
                        className="footer-btn"
                        href="https://www.behance.net/oneebfaisal"
                        target="_blank"
                        >
                        Behance
                    </a>
                    <a
                        className="footer-btn"
                        href="https://www.linkedin.com/in/meoneeb"
                        target="_blank"
                        >
                        Linkedin
                    </a>
                    <a
                        className="footer-btn"
                        href="https://www.instagram.com/meoneeb1"
                        target="_blank"
                        >
                        Instagram
                    </a>
                    <a
                        className="footer-btn"
                        href="http://wa.me/923106082275"
                        target="_blank"
                        >
                        Whatsapp
                    </a>
            </div>
        </>
    )
}