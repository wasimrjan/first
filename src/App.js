import ComboBox from './ComboBox';
import RadioGroup from './Radiogroup';
import Textbox from './Textbox';

import RDGroup from './RDGroup';
import CBBox from './CBBox';

import Tabu from './Tabu';

import 'bootstrap/dist/css/bootstrap.min.css';
import bootjs from 'bootstrap/dist/js/bootstrap';
import { useState } from 'react';
import TempForm from './TempForm';
import RawForm from './RawForm';

import Mat from './Mat';
import MatUI from './MatUI';
import ButtonAppBar from './ButtonAppBar';

import Login from './Login/Login';
import NewForm from './NewForm';
import DeisgnForm from './DeisgnForm';
import DataTablewa from './DataG';
import TestTable from './TestTable';
import NewTable from './NewTable';
import TrTd from './TrTd';
import SignIn from './MUILogin/SignIn';
import FilterD1 from './FilterD1';
import FilterTable from './FilterTable';
import CustomRatingOperator from './CustomRatingOperator';
import Effect from './Effect';

import H_useEffectN from './Hooks_useEffectN';
import Component1 from './MultipleCompo';

import BaseForm from './MultipleCompo_Context';
import Hooks_UseRef from './Hooks_UseRef';
import DataHook from './Hook_useReducer/HK_Ur';
import Hook_UseRef2 from './Hook_UseRef2';
import HookuseRed2 from './HookUseRed2';
import HookuseMemo from './HookuseMemo';
import HookuseRed from './HookUseRed';

//import SignIn from './MUILogin/Login';

/*
const js1 = {MeraColor:"red",TextColor:"white"};
const js2 = {MeraColor:"gray",TextColor:"black"};
*/


const jsname = 
{id:"nm",maxln:"5",name:"nm",label:"Na",valtp:"Number",req:"required"};
const jstb1 = 
{id:"sno",maxln:"5",name:"sno",label:"Second Number",valtp:"Number",req:"required"};


const list = [
    {"value":"Male"},
    {"value":"Female"},
    {"value":"Others"}
]

function App() {

    const [FormData, setFormData] = useState({
        fno: "",
        sno: ""
    });


    function MeraRadioClick(d){
        //const { name, value } = {"fno":d};
        setFormData((FormData) => ({
        ...FormData,
        ["fno"]: d
        }));
    }

    const MeraComboxClick = (d) => {


        const { name, value } = {"sno":d};
        setFormData((prevProps) => ({
        ...prevProps,
        ["sno"]: d
        }));

      //  console.log("Mera Combox Box Click Fired : "+d);
       
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(FormData);
      };


  return (
      <div>
        
            {/* <Textbox js={jstb}>
                Enter First Number : 
            </Textbox>

            <RadioGroup js={jstb} opn={list} value="Male">
                Enter First Number : 
            </RadioGroup>

            <ComboBox js={jstb} opn={list} value="Others">
                Enter First Number : 
            </ComboBox> */}
            
            {/* <form onSubmit={handleSubmit}>
            <RDGroup js={jstb} opn={list} DFvalue="Male"
            MyFunc={MeraRadioClick}></RDGroup>

            <CBBox js={jstb1} opn={list} DFvalue="Others"
            MyCBFunc={MeraComboxClick}
            ></CBBox>

            <input type='submit' value="Submit Form" />
            </form> */}


            {/* <TempForm></TempForm> */}


{/*             <RawForm></RawForm> */}

            {/* <Mat></Mat> */}

            {/* <MatUI></MatUI> */}

            {/* <Login></Login> */}

            {/* <NewForm></NewForm> */}

            {/* <DeisgnForm></DeisgnForm>
           
            <DataTablewa></DataTablewa> */}

            {/* <NewTable></NewTable> */}

{/* <TrTd></TrTd> */}

{/* <SignIn></SignIn> */}

            {/* <FilterD1></FilterD1> */}
{/* 
            <FilterTable></FilterTable> */}

{/* <CustomRatingOperator></CustomRatingOperator> */}
{/* 
<Effect></Effect> */}

{/* <H_useEffectN></H_useEffectN> */}

{/* 
<Component1></Component1> */}

{/* <BaseForm></BaseForm> */} 

{/* <Hooks_UseRef></Hooks_UseRef>  */}

 {/* <DataHook></DataHook>  */}

    {/* <Hook_UseRef2></Hook_UseRef2> */}


{/* <HookuseRed2></HookuseRed2> */}

{/* <HookuseRed></HookuseRed> */}

<HookuseMemo></HookuseMemo>

      </div>
      );
}

export default App;
