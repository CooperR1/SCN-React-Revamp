import React, {useState, useEffect} from 'react'
import { FaBars, FaTimes }  from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon} from "./NavbarElements"
import {Link} from "gatsby"


const NavBar = () => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])


    return (
        <>
            <IconContext.Provider value={{ color: "#5FDE0A"}}>
                <Nav active={scroll} click={click}>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon />
                            
                            Stanford Concert Network
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <div style={{width: "50%", display: "flex", alignItems: "center", justifyContent:"space-between"}}>
                        <Link to="/events/">Events</Link> <br />
                        <Link to="/gallery/">Gallery</Link> <br />
                        <Link to="/team/">Team</Link> <br />
                        </div>
                        
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar