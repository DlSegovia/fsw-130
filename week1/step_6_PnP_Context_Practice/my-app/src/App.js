import React from "react"
import './styles.css'
import Header from "./Header"
import Button from "./Button"
import themeContext from "./themeContext"

class App extends React.Component {
    constructor() {
        super()
        this.state = { theme: "light" }
    }

    changeTheme = (color) => {
        this.setState(prevState => {
            return ({ theme: color })
        })
    }
    render() {
        return (
            <themeContext.Provider value={{
                theme: this.state.theme,
                changeTheme: this.changeTheme
            }}>
                <div>
                    <Header />
                    <Button theme={this.state.theme} />
                </div>
            </themeContext.Provider>
        )
    }
}
export default App