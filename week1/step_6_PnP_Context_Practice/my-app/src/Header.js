import React from "react"
import ThemeContext from "./themeContext"

function Header(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <header className={`${theme}-theme`}>
          <ul className="list-group">
            <li className="list-group-item">Home</li>
            <li className="list-group-item">Products</li>
            <li className="list-group-item">Contact Us</li>
          </ul>
          <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
        </header>
      )}
    </ThemeContext.Consumer>
  )
}


export default Header