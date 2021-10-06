import React from 'react'

function useAuthentication() {


    return localStorage.getItem("token");

  
}

export default useAuthentication
