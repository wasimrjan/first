import { useState } from "react";
var d=10;
export default function H_useState()
{
    const [d,setD]=useState(10);

    function test(){
        setD(d+1);
        console.log(d);
    }

    return(
    <>
    <button onClick={test}>Click Here</button>
    {d}
    </>
    )
}