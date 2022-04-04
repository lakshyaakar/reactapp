import Button from "../UI/Buttons/Button"
import './Navigation.css'
const Navigation = (props) => {
    return (
        <nav className="nav">
            <ul>
                {props.userLogState ? 
                <li>
                    <a href="/users">Users</a>
                </li> : (
                    "" 
                )}

                {props.userLogState ? 
                <li>
                    <a href="/profile">Profile</a>
                </li> : (
                    "" 
                )}
                <li>
                    <a href="/about-us">About-Us</a>
                </li>
                <li>
                    <Button btnClassName="btn" onbtnClick={props.userLogout}>Logout</Button>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;