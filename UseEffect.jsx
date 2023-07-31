// UseEffect hook
// import React, { useEffect, useState } from 'react';

// const UseEffect=()=>{
//     const[num,setNum]=useState(0);
//     const[nums,setNums]=useState(0);

//     useEffect(()=>{
//         alert("I am clicked")
//     },[nums])
//     return(
//         <>
//             <buttton onClick={()=>{
//                 setNum(num+1)
//             }
//             }>Click me {num}</buttton>
//             <br/>
//              <buttton onClick={()=>{
//                 setNums(nums+1)
//             }
//             }>Click me {nums}</buttton>
//         </>
//     );
// }
// export default UseEffect;

import React, { useEffect, useState } from 'react';

const UseEffect=()=>{
    const[num,setNum]=useState(0);

    useEffect(()=>{
       document.title=`You clicked me ${num} times`;
    })
    return(
        <>
            <buttton onClick={()=>{
                setNum(num+1)
            }
            }>Click me {num}</buttton>
         
        </>
    );
}
export default UseEffect;