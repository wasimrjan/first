
import { useState } from 'react';  


function RadioGroup({js,opn,value}
    ) {

        const [ 
            selectedValue, 
            setSelectedValue, 
        ] = useState(value); 

    return (
        
            <>
                <label id={"lbl_"+js.id}>{js.label}</label>
                <br/>
                {
                
                    
                    opn.map((kb)=>
                    <>
                        <input name={js.id} type="radio" key={kb.key}
                         onClick={()=>setSelectedValue(kb.value)}
                         checked={selectedValue===kb.value}
                         />
                        {" "+kb.value}
                    </>)
                }

                <span id={"err_"+js.id}></span>
            </>

        );
  }
  export default RadioGroup;
  

