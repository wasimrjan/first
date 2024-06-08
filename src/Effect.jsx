import {useState,useEffect} from 'react';

export default function Effect(){
    const [data,setData]=useState("");
    const [data1,setData1]=useState("");
    useEffect(() => {
        console.log(data);
        console.log(data1);
    },data);
    useEffect(() => {
        console.log("Start aaa");
    },[]);

    return(
        <>
            <button onClick={()=>setData('A')}>A</button>
            <button onClick={()=>setData('B')}>B</button>
            {data}
            <hr/>
            <button onClick={()=>setData1('X')}>X</button>
            <button onClick={()=>setData1('Y')}>Y</button>
            {data1}
        </>
    )
}