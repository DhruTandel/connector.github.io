import './App.css'
import React,{createContext} from 'react';
import Main from './Main';

const FirstName=createContext();

const App=()=>{
  return(
    <>
  <FirstName.Provider value={"Dhru"}>
    <Main />
    </FirstName.Provider>
    </>
  );
}
export default App;
export {FirstName};