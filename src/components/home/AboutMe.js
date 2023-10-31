'use client'
import React, { useEffect, useState} from "react";

export default function AboutMe() {

    const skills = ['UI Design', 'Graphic Design', 'Wireframing', 'Prototyping', 'Figma', 'Adobe XD'];

    return (
        <>
            <div className="d-flex back">
                <div>
                    <h3>
                        About me
                    </h3>
                    <p>

                    </p>
                </div>
                <div className="d-flex flex-wrap" style={{width: '500px'}}>
                    {skills.map((skill) => (
                        <span style={{
                            margin: '4px',
                            padding: '10px',
                            border: '2px solid #8FF000',
                            borderRadius: '15px',
                            height: 'fit-content',
                            color: '#fff'
                            }}>
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </>
    )
}