// import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {

    const {user, loginWithRedirect,isAuthenticated,logout } = useAuth0();
 
   return(
    <>
    <p className='user-email'>{user.email}</p>
    {!isAuthenticated?
        (<li><button className='loginButton' onClick={() => loginWithRedirect()}>Log In</button></li>):


      (<li><button onClick={()=>logout( { returnTo: window.location.origin })}>Log Out</button>
       </li> ) 
      }

</>

   ) ;
   



  
};

export default LogoutButton;