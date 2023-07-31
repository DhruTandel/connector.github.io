import React, { useState } from 'react'
import Sresult from './Sresult';

export default function Search() {
    const [img,setImg]=useState("");
    const inputEvent=(event)=>{
        const data=event.target.value;
        console.log(data);
        setImg(data)
    }
  return (
   <>
   <div class="searchBar">
    <input type="text" placeholder='search anything' value={img} onChange={inputEvent}/>
    </div>
    <Sresult/>
   </>
  )
}
