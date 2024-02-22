import React, { useEffect, useState} from "react";
import { useDevice } from "../../../helpers/useDevice";

export default function LandingPage() {

    const {IsMob} = useDevice()

    return (
        <>  <div className="gradient-body">
                <div className="container fluid">
                    <div
                    className="d-flex flex-column gap-2 p-2 justify-content-center align-items-center gradient-body text-center"
                    style={{ height: '100vh'}}
                    >
                    <h1 style={{color: '#fff'}}>Hello! I am Oneeb Faisal,</h1>

                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center flex-row"
                        style={{ gap: IsMob ? '4px' : '40px', flexDirection: "row-reverse"}}
                    >
                        <span className="h3" style={{color: '#fff'}}>Graphic & UI Designer
                        <a href="#aboutme" className="btn-sm">About me</a></span>
                    </div>
                    <p style={{color: '#fff'}}>specialized in creating bespoke websites, digital products, and visual stories for fast-growing companies.</p>
                    <div
                        className="d-flex py-4 flex-wrap gap-4"
                    >
                        <a
                            className="btn-lg"
                            href="#hireMe"
                        >
                            Hire me for a project
                        </a>
                        <a
                            className="btn-lg-sec"
                            href="https://www.behance.net/oneebfaisal"
                            target="_blank"
                        >
                            See Portfolio ➞
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}