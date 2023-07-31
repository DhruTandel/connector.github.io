import React from 'react'
import { useNavigate } from 'react-router-dom';




const RouterAbout=()=>{
    const navigate=useNavigate();
    const goToContact=()=>{
        navigate('/contact')
    }
    return(
        <>

            <section>
                <h1>About page</h1>
                <button onClick={()=> goToContact()}>Go to Contact page</button>
            </section>
        </>
    );
}
export default RouterAbout;