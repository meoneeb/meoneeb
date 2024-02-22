import React, {useState, useEffect} from "react";
import { useDevice } from "../../../helpers/useDevice";
import { PortfolioData } from "@/database/PortfolioData";
import Image from "next/image";

export default function PortfolioSection() {

    return (
        <>
            <div className="back">
                <div className="container fluid d-flex pb-16 justify-content-between">
                    {
                    PortfolioData.map((value, index) => {
                        if (index < 3)
                        return (
                            <div key={index} className="d-flex flex-column gap-4"
                                style={{
                                    backgroundColor: '#fff',
                                    borderRadius: '20px',
                                    padding: '5px',
                                    color: '#1e1e1e',
                                    width: 'fit-content'
                                    }}>
                                <Image src={value.Thumbnail} width={400} height={314}/>
                                <div className="d-flex flex-column gap-0 px-2">
                                    <h6>
                                        {value.Title}
                                    </h6>
                                    <p>
                                        {value.Description}
                                    </p>
                                </div> 
                            </div>
                    
                    )})
                    }
                </div>
            </div>
        </>
        

        // <>
        //     <div className="back">
        //         <div className="container fluid">
        //             <div>
        //                 <PortfolioCard/>
        //             </div>
        //         </div>
        //     </div>
        // </>
    )

}