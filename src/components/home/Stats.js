import React, { useEffect, useState} from "react";

export default function Stats() {

    const stats = [
        {
            Value: "4+ Years",
            Title: "Experience"
        },
        {
            Value: "20+",
            Title: "Projects completed"
        },
        {
            Value: "Google",
            Title: "Certifications"
        }
    ]


    return (
        <>  <div style={{ backgroundColor: '#2A2A2A'}}>
                <div className="container fluid">
                    <div className="d-flex justify-content-between align-items-center gap-4 py-8 px-16">
                        {
                            stats.map((value, index) => (
                                <div className="d-flex flex-column align-items-center">
                                    <h4 style={{ color: '#fff'}}>
                                        {value.Value}
                                    </h4>
                                    <h6 style={{color: '#8fff00'}}>
                                        {value.Title}
                                    </h6>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}