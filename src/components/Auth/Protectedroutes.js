import React from 'react'

import {Route,Redirect} from 'react-router-dom';

import auth from './auth';
import useAuthentication from './useAuthentication';

// Its a higher order componnent -->

/// It takes a component as an argument
export default function Protectedroutes({component:Component,...rest}) {

    const iAuthenticated=useAuthentication();
    return (
       <Route
       {...rest}
       render={props=>{
           if(iAuthenticated )
           {

            return <Component {...props} />
           }
else{
    return(
        <Redirect
        to={{
            pathname:"/login",
            state:{
                from:props.location
            }
    
        }}
        
        />

    )

  
   
}


        
       }}
       
       
       
       
       />
    )
}