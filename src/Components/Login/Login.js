import Card from "../UI/Card/Card";
import Button from "../UI/Buttons/Button";
import './Login.css';
import {useEffect, useState} from 'react'

const Login = (props) => {
    //email
    const [userEmail, setUserEmail] = useState('');
    // const [emailIsValid,setEmailIsValid] = useState();
    //password
    const [UserPassword, setUserPassword] = useState('');
    // const [passwordIsValid,setPasswordIsValid] = useState();

    // //Form
    // const [formIsValid,setFormIsValid] = useState(false);

    const newEmailValidation = userEmail.includes('@');

    const newPassword = UserPassword.trim().length > 5;
    console.log(newEmailValidation);

    let formIsValid = false;
    if(newEmailValidation && newPassword){
        formIsValid = true;
    }

    // useEffect(() => {
    //     const identifer = setTimeout( () => {
    //         console.log('In login Effect')
    //         setFormIsValid(
    //             userEmail.includes("@") && UserPassword.trim().length >6
    //         );
    //     },5000)
        
    //     //clean up

    //     return () => {
    //         console.log('clean up');
    //         clearTimeout(identifer)
    //     };
        
    // },[userEmail,UserPassword]);


    //Email
    const emailChangeHandler = (event) => {
        setUserEmail(event.target.value)

    }

    // //Email Blur

    // const emailBlurHandler = () => {
    //     setEmailIsValid(userEmail.includes('@'))
    // }

    //Password
    const passwordChangeHandler = (event) => {
        setUserPassword(event.target.value)
    }

    // //Password Blur

    // const passwordBlurHandler = () => {
    //     setPasswordIsValid(UserPassword.trim().length > 6)
    // }
    
    //Submit
    const submitHandler = (event) => {
        event.preventDefault();
        console.log("Useremail:", userEmail, "Password:", UserPassword)
    
        props.onLoginClick(userEmail,UserPassword)
    }

    return (
        <Card className="login">
            <form onSubmit={submitHandler}>
                <div className={`control ${newEmailValidation==false ? "invalid":""}`}>
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        onChange={emailChangeHandler} 
                        // onBlur = {emailBlurHandler}
                    />
                </div>
                <div className={`control ${newPassword==false ? "invalid":""}`}>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        onChange={passwordChangeHandler} 
                        // onBlur = {passwordBlurHandler}
                    />
                </div>
                <div className="actions">
                    <Button type="submit" btnDisable={!formIsValid}>Login</Button>
                </div>
            </form>
        </Card>
    )
}

export default Login