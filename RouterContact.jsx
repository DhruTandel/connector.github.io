import React from 'react'
import { useNavigate } from 'react-router-dom';




const RouterContact=()=>{
    const navigate=useNavigate();

    const goToHome=()=>{
        navigate('/')
    }
    return(
        <>

            <section>
                <h1>Contact page</h1>
                <button onClick={()=> goToHome()}>Go to Home</button>
            </section>
        </>
    );
}
export default RouterContact;