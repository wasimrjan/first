import { useState,useEffect } from "react";
//var d=10;
export default function H_useEffect()
{
    const [d,setD]=useState(8);

    useEffect(() => {
        console.log(d);
    });

    function test(){
        if(d<=10)
            setD(d+1);
        else
            setD(d);

        //console.log(d);
    }

    return(
    <>
    <button onClick={test}>Click Here</button>
    {d}
    </>
    )
}

