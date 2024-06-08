import { useState } from "react";

import Textbox from "./Textbox";
import CBBox from "./CBBox";
import RDGroup from "./RDGroup";

const jstxtname = 
{id:"nm",maxln:"5",name:"nm",label:"Student Name",valtp:"Number",req:"required"};

const jsrggender = 
{id:"gen",maxln:"5",name:"gen",label:"Select Gender",valtp:"Number",req:"required"};

const lstgen = [{"value":"Male"},{"value":"Female"},{"value":"Others"}];

const jscbcountry = 
{id:"country",maxln:"5",name:"country",label:"Select Country",valtp:"Number",req:"required"};

const lstcountry = [
    {"value":"0","text":"Select"},
    {"value":"10","text":"India"},
    {"value":"20","text":"Bhutan"},
    {"value":"30","text":"Sri Lanka"}];

function TempForm()
{

    const [FormData,setFD] = useState(
        {"nm":"","gen":"Female","country":"20"});

    function setFormData(nm,vl){

       // console.log(nm+" : "+vl);

        setFD({
        ...FormData,
        [nm]: vl
        });

    }
    

    function handleSubmit(event){
        event.preventDefault();
        console.log(FormData);
    }

    return(
        <>

            <form onSubmit={handleSubmit}>

            <Textbox js={jstxtname} MyFunc={setFormData}></Textbox>

            <RDGroup js={jsrggender} opn={lstgen} DFvalue={FormData.gen}
            MyFunc={setFormData}></RDGroup>

            <CBBox js={jscbcountry} opn={lstcountry} DFvalue={FormData.country}
            MyFunc={setFormData}></CBBox>

            <input type="submit" value="Show Form Data" />

            </form>

        </>
    )
}

export default TempForm;


