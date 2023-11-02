import React, { useEffect, useState} from "react";
import { useDevice } from "../../../helpers/useDevice";

export default function LandingPage() {

    const {IsMob} = useDevice()

    return (
        <>  <div className="gradient-body">
                <div className="container fluid">
                    <div
                    className="d-flex flex-column gap-2 p-2 justify-content-center align-items-center gradient-body"
                    style={{ height: '100vh'}}
                    >
                    <h1 className="mt-20" style={{color: '#8FFF00'}}>Hello! I am Oneeb Faisal,</h1>
                    <div
                        className="d-flex flex-row gap-4 align-items-center"
                    >
                        <h3 style={{color: '#fff'}}>Graphic & UI Designer</h3>
                        <button className="btn-sm">About me</button>
                    </div>
                    <p style={{color: '#fff'}}>specialized in creating bespoke websites, digital products, and visual stories for fast-growing companies.</p>
                    <div
                        className="d-flex py-4 flex-wrap gap-4"
                    >
                        <button className="btn-lg">Hire me for a project</button>
                        <button className="btn-lg-sec">See Portfolio ➞</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}