import { useState } from "react";
function RawForm()
{

    const [FormData,setFormData] = useState(
        {"snm":"sessss","course":"2","area":"City","idproof":[],"country":[]}
    );

    function onChangeTextBox(event){
        let v = event.target.value;
        let n = event.target.name;

        setFormData({...FormData,[n]:v});
    }

    function onChangeCombo(event){
        let v = event.target.value;
        let n = event.target.name;

        setFormData({...FormData,[n]:v});
    }

    function onChangeRadio(event){
        let v = event.target.value;
        let n = event.target.name;

        setFormData({...FormData,[n]:v});
    }

    function onChangeCheckBox(event){
        let v = event.target.value;
        let n = event.target.name;
        var ar = [...FormData[n]];

        if(event.target.checked)
            ar.push(v);
        else
            {
                var idx = ar.indexOf(v);
                ar.splice(idx,1);
            }

        setFormData({...FormData,[n]:ar});
    }


    function onChangeComboMultiple(event){
        let n = event.target.name;
        var d = document.getElementById(n);
        var ar = [];
        
        for(var i=0;i<d.options.length;i++){
            if(d.options[i].selected)
                ar.push(d.options[i].value)
        }
        setFormData({...FormData,[n]:ar});
    }

    function FormSubmit(event){
        event.preventDefault();
        console.log(FormData);
    }

    return (
        <>

            <form onSubmit={FormSubmit}>
                <div className="container">
                    Student Name : 
                    <input type="text" id="snm" name="snm"
                    value={FormData.snm} onChange={onChangeTextBox} className="form-control" />

                    {FormData.snm}

                    Course
                    <select className="form-control" name="course" onChange={onChangeCombo}>
                        <option value="" selected={FormData.course===""}>Select</option>
                        <option value="1" selected={FormData.course==="1"}>Asp.net Core</option>
                        <option value="2" selected={FormData.course==="2"}>React</option>
                        <option value="3" selected={FormData.course==="3"}>Linux</option>
                    </select>


                    Area :

                    <input type="radio" name="area" 
                    value="Village" onClick={onChangeRadio}
                    checked={FormData.area==="Village"} /> Village
                    <input type="radio" name="area" 
                    value="City"
                    checked={FormData.area==="City"} 
                    onClick={onChangeRadio} /> City
                    
                    <br/>

                    ID Proof :

                    <input type="checkbox" name="idproof"
                    value="Aadhar"
                    checked={FormData.idproof.includes("Aadhar")}
                    onClick={onChangeCheckBox}
                    /> Aadhar Card

                    <input type="checkbox" name="idproof"
                    value="PAN"
                    checked={FormData.idproof.includes("PAN")}
                    onClick={onChangeCheckBox}
                    /> PAN Card

                    <input type="checkbox" name="idproof"
                    value="DL"
                    checked={FormData.idproof.includes("DL")}
                    onClick={onChangeCheckBox}
                    /> Driving License

                    <input type="checkbox" name="idproof"
                    value="Voter"
                    checked={FormData.idproof.includes("Voter")}
                    onClick={onChangeCheckBox}
                    /> Voter Card

                    <br/>
                    {FormData.idproof}
                    <br/>


                    Country : 
                    <select className="form-control" multiple="true" id="country" name="country" onChange={onChangeComboMultiple}>
                        <option value="India" selected={FormData.country.includes("India")}>India</option>
                        <option value="Bhutan" selected={FormData.country.includes("Bhutan")}>Bhutan</option>
                        <option value="Sri Lanka" selected={FormData.country.includes("Sri Lanka")}>Sri Lanka</option>
                    </select>

                    {
                        FormData.country
                    }


                    <input type="submit" value="Submit Form" className="btn btn-success" />
                </div>

                
            </form>
        </>
    )
}

export default RawForm;