import React, {useState, useEffect} from "react";
import { useDevice } from "../../../helpers/useDevice";
import { PortfolioData } from "./PortfolioData";

export default function PortfolioCard() {

    // const card = [
    //     <>
    //         {
    //             PortfolioData.map((value, index) => (
    //                 <div key={index} className="d-flex flex-column">
    //                     <h6>
    //                         {value.Title}
    //                     </h6>
    //                     <p>
    //                         {value.Description}
    //                     </p>
    //                 </div>
    //             ))
    //         }
    //     </>
    // ]

    return (
        <>
            <div className="back">
                <div className="container fluid">
                    {
                        PortfolioData.map((value, index) => (
                            <div key={index} className="d-flex flex-column">
                                <h6>
                                    {value.Title}
                                </h6>
                                <p>
                                    {value.Description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )

}