import React from "react"
import ThemeContext from "./themeContext"

function Button(props) {
  return (

    <ThemeContext.Consumer>
      {({ theme, changeTheme }) => {
        return (
          <button
            onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
            className={`${theme}-theme`}
          >
            Switch Theme
          </button>
        )
      }}
    </ThemeContext.Consumer>
  );
}

export default Button