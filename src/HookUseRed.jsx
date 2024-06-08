import React,{useReducer, useState} from 'react';

const initialState = {first:0,second:10};

const iState = {first:0};


const reducer = (state,action) =>{
    switch(action.type){
        case 'i':
            return {...state,first:state.first + action.value};
        case 'd':
            return {...state,first:state.first - action.value};
        case 'i1':
                return {...state,second:state.second + 1};
        case 'd1':
                return {...state,second:state.second - 1};    
        case 'r':
            return initialState;
        default:
           return state;
    }
}

export default function HookuseRed(){
    const [count,dispatch] = useReducer(reducer,initialState);
    const [counta,dispatcha] = useReducer(reducer,initialState);

    return(
        <>
        
            First {count.first}

            Second {count.second}

            <button onClick={()=>dispatch({type:'i',value:5})}>Inc</button>
            <button onClick={()=>dispatch({type:'d',value:3})}>Dec</button>



            <button onClick={()=>dispatch({type:'i1'})}>Inc 1</button>
            <button onClick={()=>dispatch({type:'d1'})}>Dec 1</button>

            <hr/>

            <button onClick={()=>dispatch('r')}>Reset</button>
        

            <hr/>

            {counta.first}

            <button onClick={()=>dispatcha({type:'i',value:5})}>Inc</button>
            <button onClick={()=>dispatcha({type:'d',value:3})}>Dec</button>



        </>

    )
}