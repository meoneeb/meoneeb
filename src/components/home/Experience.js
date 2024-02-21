import React, { useState, useEffect} from "react";
import '../../styles/pages/experience.scss'
import { experience } from "@/database/ExperienceData";

export default function Experience() {
    
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
                            <a 
                                href="https://drive.google.com/file/d/1TNVqSQ_nl9g6pHTwbLTyGtM7w1Kzf__q/view?usp=drive_link"
                                className="btn-lg"
                                target="_blank"
                                >
                                Download Resume
                                <i class="fi fi-br-down-to-line"></i>
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
                            experience.map((value, index) => (
                                <div key={index} className="d-flex flex-column exp-card justify-content-center">
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