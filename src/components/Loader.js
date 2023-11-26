import React from "react";
import { Dna } from  'react-loader-spinner';
const Loadering=({width,height})=>{
    return(
<Dna
        visible={true}
        height={width}
        width={height}
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
    />
    )
}
export default Loadering;