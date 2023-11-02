import React, { useEffect, useState} from "react";

export default function AboutMe() {

    const skills = ['UI Design', 'Graphic Design', 'Wireframing', 'Prototyping', 'Design System', 'User-flow', 'Visual Design', 'Typography', 'Figma', 'Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects', 'Adobe Premiere Pro', 'HTML/CSS', 'Javascript'];

    return (
        <>
            <div className="back">
                <div className="container d-flex flex-wrap">
                    <div className="col-lg-6">
                        <h3 style={{ color: '#8fff00'}}>
                            About me
                        </h3>
                        <p>
                            I bring with more than four years of experience in the design industry. I have collaborated with renowned scientific research companies such as Abiosciences and Iview Therapeutics based in the US, as well as worked with familiar brands such as Hardees, Pizza Online and Pizza House on several successful projects. My services encompass a wide range of design-related disciplines such as Graphic Design, UX/UI Design, and Web Development.
                        </p>
                    </div>
                    <div className="d-flex flex-wrap col-lg-6 gap-2">
                        {skills.map((skill) => (
                            <span key={skill.id} style={{ margin: '4px', padding: '10px', border: '2px solid #8FF000', borderRadius: '15px', height: 'fit-content', color: '#fff'}}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}