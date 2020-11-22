import React, { useState, useContext } from 'react'
import {slide as Menu} from 'react-burger-menu'
import "./hamburger.css"

const MyContext = React.createContext();

const MyProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false)
  
  return (
    <MyContext.Provider value={{
      isMenuOpen: menuOpenState,
      toggleMenu: () => setMenuOpenState(!menuOpenState),
      stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

const Button = () => {
  const ctx = useContext(MyContext)
  return (
    <button className="hide-lg" onClick={ctx.toggleMenu}>gg</button>
  )
}

const Navigation = () => {
  const ctx = useContext(MyContext)
  return (
    <Menu 
      customBurgerIcon={false}
      isOpen={ctx.isMenuOpen}
      onStateChange={(state) => ctx.stateChangeHandler(state)}
    >
       <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
    </Menu>
  )
}

export default function Hamburger() {


  return (
    <MyProvider className="hide-lg">
      <div>
        <Button />
        <Navigation />
      </div>
    </MyProvider>
  )
}
