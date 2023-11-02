import React, { useEffect, useState} from "react";
import { useDevice } from "../../../helpers/useDevice";

export default function Stats() {

    const {IsMob} = useDevice()

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
                    <div className="d-flex justify-content-center align-items-center py-8"
                        style={{
                            gap: IsMob ? '10px' : '100px',
                            flexDirection: IsMob ? 'column' : 'row',
                            justifyContent: IsMob ? 'center' : 'space-between'
                        }}>
                        {
                            stats.map((value) => (
                                <div className="d-flex flex-column text-center">
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