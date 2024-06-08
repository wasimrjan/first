import { useState } from "react";

function RDGroup({js,opn,DFvalue,MyFunc}
    ) {

        function SetRadio(nm,RDValue){
            //console.log(RDValue);
            MyFunc(nm,RDValue);
            setRadioValue(RDValue);
        }

        const [RadioValue,setRadioValue] = useState(DFvalue);

    return (
        
            <>
                <label id={"lbl_"+js.id}>{js.label}</label>
                <br/>
                {
                
                opn.map((kb)=>
                    <>
                        <input name={js.name} type="radio" 
                         checked={RadioValue==kb.value}
                         onClick={()=>SetRadio(js.name,kb.value)}
                         //onClick={()=>setRadioValue(kb.value)}
                         value={kb.value}
                         />
                        {" "+kb.value}
                    </>)
                }

                <span id={"err_"+js.id}></span>
            </>

        );
  }
  export default RDGroup;
  

