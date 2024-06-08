import { useState } from "react";
function CBBox({js,opn,DFvalue,MyFunc}
) {

    const [CBValue,setCBValue]=useState(DFvalue);

    // function CBEventHandler(event){
        
    // }

    const CBEventHandler = (event) => {

        let vl = event.target.value;
        let nm = event.target.name;
        console.log(vl);
        setCBValue(vl);
        MyFunc(nm,vl);
        //setSelectedValue(event.target.value);
     
    };

return (
 
        <div className="form-group">
            <label id={"lbl_"+js.id}>{js.label}</label>
            <br/>
            <select name={js.name} id={js.id} onChange={CBEventHandler}>
            {
                opn.map((kb)=>
                <>
                    <option 
                    value={kb.value}
                    selected={kb.value==CBValue}
                    >{kb.text}</option>
                </>)
            }   

            </select>
            <span id={"err_"+js.id}></span>
        </div>

    );
}
export default CBBox;


