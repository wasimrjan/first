import { useRef, useState } from 'react';

export default function Hooks_UseRef() {
  var [ref,setRef] = useState(0);

  function congo() {
    //alert('Congo ' + ref);
  }

  function handleClick() {
    setRef(ref + 1);
  //  alert('You clicked ' + ref + ' times!');
  //  congo();
  }

  return (
    <>
    <button onClick={()=>handleClick()}>
      Click me!
      {ref}
    </button>
    <button onClick={()=>handleClick()}>
    Click me!
    {ref}
  </button>
  <button onClick={()=>handleClick()}>
  Click me!
  {ref}
</button>
<button onClick={()=>handleClick()}>
      Click me!
      {ref}
    </button>
    </>
  );
}