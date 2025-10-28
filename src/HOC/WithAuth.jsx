import React from 'react'


const isAuthenticated = true; // This should be replaced with actual authentication logic
const WithAuth = (Component) => {


  return function(props){ 
    if (!isAuthenticated) {
      return <div>You must be logged in to view this content.</div>
      
    }
    else{return <Component {...props}/>}

  }
}

export default WithAuth
export {isAuthenticated};