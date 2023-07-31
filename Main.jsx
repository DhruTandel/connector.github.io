import React, { useContext } from 'react';
import { FirstName } from './App';

const Main=()=>{
  const fname=useContext(FirstName);
  return(
    <>
       <h1>Hello {fname}</h1> 
    </>
  );
}
export default Main;