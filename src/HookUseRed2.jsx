import React,{useReducer} from 'react';

const initialState = {first:0,second:10};

const reducer = (state,action) =>{
    switch(action.type){
        case 'i':
            return {...state,first:state.first + 1};
        case 'd':
            return {...state,first:state.first - 1};
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

export default function HookuseRed2(){
    const [count,dispatch] = useReducer(reducer,initialState);

    return(
        <>
        
            Count {count.first}<br/>
            Count 2 {count.second}

            <button onClick={()=>dispatch({type:'i'})}>Inc</button>
            <button onClick={()=>dispatch({type:'d'})}>Dec</button>


            <button onClick={()=>dispatch({type:'i1'})}>Inc1</button>
            <button onClick={()=>dispatch({type:'d1'})}>Dec1</button>

            <button onClick={()=>dispatch({type:'r'})}>Reset</button>
        
        </>

    )
}