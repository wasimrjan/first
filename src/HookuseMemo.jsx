import React,{useState,useMemo} from "react";


function HookuseMemo()
{
    const [cOne,setcOne] = useState(0);
    const [cTwo,setcTwo] = useState(5);

    const incrementOne = () =>{
        setcOne(cOne+1);
    }

    const incrementTwo = () =>{
        setcTwo(cTwo+1);
    }

    const getEvenOdd = useMemo(() =>{
        console.log("even odd hua");
        if(cOne%2==0) 
            return 'Even';
        else
            return 'Odd';
    },[cOne]);


    

    return(
        <>
            {getEvenOdd}

            <button onClick={incrementOne}>{cOne}</button>
            <button onClick={incrementTwo}>{cTwo}</button>
        </>
    )
}

export default HookuseMemo;