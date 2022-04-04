import Navigation from "../Navigation/Navigation";
import styles from './Header.module.css'

const Header = (props) => {
    return (
        <header className={styles.header}> 
        {/* Above we have classname with only one word i.e. header, so we can access it using '.' . But, if we have classnames having multiple words like 'main-header', we can't use '.' , we have to use '[]' . */}


            <h1>Storage App</h1>
            <Navigation 
                userLogState={props.userLoggedIn} 
                userLogout={props.onLogoutClick} />
        </header>
    )
}

export default Header;