import React, { useState, useEffect} from "react";

export default function Experience() {
    const experience = [
        {
            title: "Lead Designer",
            company: "BlueJay Health",
        },
        {
            title: "Graphic Designer",
            company: "Integrated Marketing Solutions",
        }
    ]
    
    return (
        <div className="back">
            <div className="container fluid">
                <div>
                    {
                        experience.map((value) => (
                            <div>
                                <span>
                                {value.title}
                            </span>
                            <span>
                                {value.company}
                            </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}