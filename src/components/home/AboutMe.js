import React, { useEffect, useState} from "react";
import { useDevice } from "../../../helpers/useDevice";

export default function AboutMe() {

    const {IsWeb} = useDevice()

    const skills = ['UI Design', 'Graphic Design', 'Wireframing', 'Prototyping', 'Design System', 'User-flow', 'Visual Design', 'Typography', 'Figma', 'Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects', 'Adobe Premiere Pro', 'HTML/CSS', 'Javascript'];

    return (
        <>
            <div id="aboutme" className="back">
                <div className="container d-flex flex-wrap pb-8">
                    <div className="col-lg-6">
                        <h3 style={{ color: '#8fff00'}}>
                            About me
                        </h3>
                        <p>
                            I bring with more than four years of experience in the design industry. I have collaborated with renowned scientific research companies such as Abiosciences and Iview Therapeutics based in the US, as well as worked with familiar brands such as Hardees, Pizza Online and Pizza House on several successful projects. My services encompass a wide range of design-related disciplines such as Graphic Design, UX/UI Design, and Web Development.
                        </p>
                    </div>
                    <div
                        className="d-flex flex-wrap col-lg-6 gap-2"
                        style={{ border: '2px solid #2a2a2a', borderRadius: '35px', padding: '20px' }}
                        >
                        {skills.map((skill) => (
                            <span key={skill.id} style={{ margin: IsWeb ? '4px': '2px', padding: IsWeb ? '10px':'8px', border: '2px solid #8FF000', borderRadius: '15px', height: 'fit-content', color: '#fff', fontSize: IsWeb ? '16px':'14px'}}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}