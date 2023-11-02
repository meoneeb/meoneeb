import React from "react";

export default function Footer () {
    return (
        <>
            <div
                className="back d-flex flex-wrap gap-0"
                style={{
                    backgroundColor: '#1e1e1e',
                    color: '#fff'
                }}
                >
                    <span
                        className="footer-btn"
                        >
                        Behance
                    </span>
                    <span
                        className="footer-btn"
                        >
                        Linkedin
                    </span>
                    <span
                        className="footer-btn"
                        >
                        Instagram
                    </span>
                    <span
                        className="footer-btn"
                        >
                        Whatsapp
                    </span>
            </div>
        </>
    )
}