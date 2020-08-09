import React from "react"
import {UserContextConsumer} from "./userContext"
import "./styles.css"
function Header() {
    return (
        <header>
            <UserContextConsumer>
                {username => (
                    <p>Welcome, {username}!</p>
                )}
            </UserContextConsumer>
        </header>
    )
}

export default Header
