import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function BaseForm() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      
        <DivCompo></DivCompo> 
        <DivCompo2></DivCompo2>
        <DivCompo3></DivCompo3>

    </UserContext.Provider>
  );
}

function DivCompo() {
  return (
    <>
      <h1>Component</h1>
    </>
  );
}

function DivCompo2() {
   const user = useContext(UserContext);
    return (
      <>
        <h1>Component 2</h1>
        {user}
      </>
    );
  }

  function DivCompo3() {
    return (
      <>
        <h1>Component 3</h1>
      </>
    );
  }