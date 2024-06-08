import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function BaseForm() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      
       <DivCompo user={user}></DivCompo> 
        <DivCompo2 user={user}></DivCompo2>
        <DivCompo3 user={user}></DivCompo3>

    </UserContext.Provider>
  );
}

function DivCompo({user}) {
  return (
    <>
      <h1>Component</h1>
    </>
  );
}

function DivCompo2({user}) {
   // const user = useContext(UserContext);
    return (
      <>
        <h1>Component 2</h1>
        {user}
      </>
    );
  }

  function DivCompo3({user}) {
    return (
      <>
        <h1>Component 3</h1>
      </>
    );
  }