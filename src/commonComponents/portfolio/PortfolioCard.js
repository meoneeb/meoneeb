import { PortfolioData } from "@/database/PortfolioData"
import Image from "next/image";
import { useState } from "react";

export default function PortfolioCard() {
    const [mapData, setmapdata] = useState([])
    let oneeb = 1
    if (oneeb === 1) {
        setmapdata(PortfolioData)
    }
    return (
        <>
            {
                mapData.map((value, index) => (
                    <div key={index} className="d-flex flex-column">
                        <Image src={value.Thumbnail} width={400} height={314} />
                        <h6>
                            {value.Title}
                        </h6>
                        <p>
                            {value.Description}
                        </p>
                    </div>
                ))
            }
        </>
    )
}