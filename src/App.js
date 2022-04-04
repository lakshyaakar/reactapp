import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import { useState,useEffect, Fragment } from "react";
import UserData from "./Components/RefFile/UserData";
import {Routes,Route} from 'react-router-dom';
import Users from './Components/User/Users';
import Profile from './Components/User/Profile' 

function App() {

  //Login
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  
  
  
  useEffect(()=>{
        const localStorageData = localStorage.getItem("userLoginState");

            if(localStorageData === "LOGGED_IN"){
              setIsLoggedIn(true);
        }
  },[])
  
  const loginHandler = (email,password) => {
      console.log(email,password);
      setIsLoggedIn(true);

    localStorage.setItem('userLoginState','LOGGED_IN')
  }

  // Logout
  const logoutHandler = () => {
    setIsLoggedIn(false)
    localStorage.clear(); // It removes all key-value pair
    // localStorage.removeItem('userLoginState'); // It removes particular key-value pair
  }

  return (
    <Fragment>
      <Header userLoggedIn={isLoggedIn} onLogoutClick={logoutHandler} />
        <main>
          {!isLoggedIn ? ( <Login onLoginClick={loginHandler} />  
            ) : ( 
                <Home onLogoutClick={logoutHandler} /> 
              )
          }
          <Routes>
              {/* <Route path="/users" element={<p>Users</p>} /> */} 
              {/* We can pass JSX variables as shown above and also components as shown below */}
              
              <Route path="/users" element={<Users />} />
              <Route path="/profile" element = {<Profile/>} />

          </Routes>
          
          <UserData />

        </main>
    </Fragment>
    
  );
}

export default App;
