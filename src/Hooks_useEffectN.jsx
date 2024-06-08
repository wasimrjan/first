import { useState,useEffect } from "react";

export default function H_useEffectN()
{
    const [d,setD]=useState("");
    const [d1,setD1]=useState("");

    useEffect(() => {
        console.log("d : "+d);
        console.log("d1 : "+d1);
    },[d]);

    useEffect(() => {
        console.log("One Time");
    },[]);

    return(
    <>
    <button onClick={()=>setD('A')}>A</button>
    <button onClick={()=>setD('B')}>B</button>
    {d}
    <hr/>
    <button onClick={()=>setD1('X')}>X</button>
    <button onClick={()=>setD1('Y')}>Y</button>
    {d1}
    </>
    )
}