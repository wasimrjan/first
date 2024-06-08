const d = [1,6,8,9,2,20,30,40,6];

const nm = ["hello@congo.in","9234925157","Virat","kkriss@gmail1.com","1234567890"];

function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  

function hello(x){
    if(x.length>=15)
        return true;
    else
        return false;
}

export default function FilterD1()
{
    //var k = d.filter(dd=>dd>10);
    //var p = /^\d{10}$/;

    var p = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return(
        <>
            
            {d.filter(dd=>dd>=1 && dd<=10).map((row) => (
                <>
                {row} 
                <br/>
                </>
            ))}
          
            

            {/* {nm.filter(n=>p.test(n)).map((row) => ( */}
                {nm.filter(n=>hello(n)).map((row) => (
                <>
                {row} 
                <br/>
                </>
            ))}


            <br/>

            {rows.filter(n=>n.name.includes('i') && n.calories>250).map((row) => (
                <>
                {row.name} || {row.calories} 
                <br/>
                </>
            ))}

        </>
    )
}