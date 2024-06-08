
const k = [
    {"label":"aa","checked":false},
    {"label":"bb","checked":true},
    {"label":"cc","checked":false},
];

function Kk(
    
) {
    return (
        <div>
            
            {k.map((r)=>
                <>
                <input type="radio" value={r.label} checked={r.checked} />
                {r.label}
                </>
            )} 
        

        </div>
        );
  }
  
  export default Kk;
  

