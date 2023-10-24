import React from "react";

export default function LandingPage() {

    return (
        <>
            <div
                className="gradient-body"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    alignItems: 'center',
                    padding: '12px',
                    height: '100vh'
                }}
            >
               <h1 className="mt-20" style={{color: '#8FFF00'}}>Hello! I am Oneeb Faisal,</h1>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '20px',
                        alignItems: 'center'
                        }}
                >
                    <h3 style={{color: '#fff'}}>Graphic & UI Designer</h3>
                    <button className="btn-sm">About me</button>
                </div>
                <p>specialized in creating bespoke websites, digital products, and visual stories for fast-growing companies.</p>
                <div
                    className="py-4"
                    style={{
                        display: 'flex',
                        gap: '20px'
                    }}
                >
                    <button className="btn-lg">Hire me for a project</button>
                    <button className="btn-lg-sec">See Portfolio ➞</button>
                </div>
            </div>
        </>
    )
}