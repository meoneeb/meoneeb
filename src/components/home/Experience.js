import React, { useState, useEffect} from "react";
import '../../styles/pages/experience.scss'

export default function Experience() {
    const experience = [
        {
            Title: "Sr. Designer",
            Company: "BlueJay Health",
            Start: "August 2022",
            End: "Present",
        },
        {
            Title: "Lead Designer",
            Company: "Carolina Education",
            Start: "December 2021",
            End: "Present",
        },
        {
            Title: "Graphic & UI Designer",
            Company: "Abiosciences Inc.",
            Start: "March 2022",
            End: "December 2022",
        },
        {
            Title: "Graphic Designer",
            Company: "Integrated Marketing Solutions",
            Start: "January 2020",
            End: "October 2021"
        }
    ]
    
    return (
        <div className="back">
            <div className="container fluid">
                <div className="d-flex flex-wrap py-16">
                    <div className="d-flex flex-column col-sm-6">
                        <h3 style={{ color: '#8fff00'}}>
                            Work Experience
                        </h3>
                        <p>
                            I have collaborated with renowned scientific research companies such as Abiosciences and Iview Therapeutics based in the US, as well as worked with familiar brands such as Hardees, Pizza Online and Pizza House on several successful projects.
                        </p>
                        <div className="d-flex flex-wrap gap-3 py-4">
                            <a href="https://drive.google.com/file/d/1TNVqSQ_nl9g6pHTwbLTyGtM7w1Kzf__q/view?usp=drive_link" className="btn-lg" target="_blank">
                                Download Resume
                                <span class="material-symbols-outlined">download</span>
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
                    <div className="d-flex flex-column col-sm-6 gap-2">
                        {
                            experience.map((value) => (
                                <div className="d-flex flex-column exp-card justify-content-center">
                                    <h6 className="title">
                                        {value.Title}, {value.Company}
                                    </h6>
                                    <p style={{color: '#878A84', fontSize: '16px'}}>
                                        {value.Start} - {value.End}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}