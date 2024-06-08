import { useState } from "react";

function ComboBox({js,opn,value}
) {

    const [selectedValue,setSelectedValue] = useState(value);

    const handleChange = (event) => {

        console.log(event.target.value);
        setSelectedValue(event.target.value);
     
    };

return (
 
        <div className="form-group">
            <label id={"lbl_"+js.id}>{js.label}</label>
            <br/>
            <select id={js.id} onChange={handleChange}>
            {
                opn.map((kb)=>
                <>
                    <option 
                    value={kb.value}
                    selected={kb.value==selectedValue}
                    >{kb.value}</option>
                </>)
            }   

            </select>
            <span id={"err_"+js.id}></span>
        </div>

    );
}
export default ComboBox;


