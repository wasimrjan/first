import { useRef } from "react";

function Hook_UseRef2()
{
    var c = useRef();

    function testClick()
    {
        c.current.focus();
        c.current.select();
    }

    return(

        <>
        
            <input type="text" ref={c}></input>
            <input type="button" onClick={testClick}></input>
        
        </>



    )

}

export default Hook_UseRef2;