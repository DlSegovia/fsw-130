import React from "react"

import Header from "./Header"
import {UserContextConsumer} from "./userContext"

class App extends React.Component {
    state = {
        newUsername: ""
    }
    
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }
    
    render() {    
        return (
            <div>
                <Header />
                <main>
                    <UserContextConsumer>
                        {username => (
                            <p className="main">No new notifications, {username}! 🎉</p>
                        )}
                    </UserContextConsumer>
                </main>
                
                <input
                    type="text"
                    name="username"
                    placeholder="New username"
                    value={this.state.newUsername}
                    onChange={this.handleChange}
                />
                <button>Change Username</button>
                
            </div>
        )
    }
}

export default App