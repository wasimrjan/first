import { useState } from "react";

function TBReq(p){
    if(p==true)
        return ("required");
    else
        return "";
}

function Textbox({js,MyFunc}
    ) {

       // const [TBValue,setTBValue]=useState('');

        function onTBChange(event){
            let v = event.target.value;
            let n = event.target.name;
            //setTBValue(v);
            MyFunc(n,v);
        }

    return (
        
            <div className="form-group">
                <label id={"lbl_"+js.id}>{js.label}</label>
                <input id={js.id} type="text" name={js.name}
                onChange={onTBChange} className="form-control" required={js.req} />
                <span id={"err_"+js.id}></span>
            </div>

        );
  }
    export default Textbox;
  

