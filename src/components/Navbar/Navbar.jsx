import React, {useState, useEffect} from 'react';
import { IconContext } from "react-icons";
import { BiMenu, BiX } from "react-icons/bi";
import {Button} from '../../Globalstyles';
import 
{
    Nav,
    NavbarContainer,
    NavLogo,
   
    MenuIcon,
    Menu,
    MenuItem,
    MenuLink,
    MenuItemBtn,
    MenuLinkBtn,
} from './Navbar.styles';
const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth<= 1000){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);
    
    return (
        <div>
            <IconContext.Provider value={{ color: '#000'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            {/* <NavIcon/> */}
                            <img style={{"width": "260px", "height": "70px", "padding": "10px", "margin-botton": "18px", }} src="https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/logo_academclone.png?alt=media&token=385f7d02-a920-4a4b-8ad2-f131f8582932" alt="logo" />
                            
                        </NavLogo>
                        <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>

                        <Menu onClick={handleClick} click={click}>
                            
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/studen-stories">Student Stories</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/coming-soon">Coming Soon</MenuLink>
                            </MenuItem>
                            <MenuItemBtn>
                                {button?(
                                    <MenuLinkBtn to="/aplica">
                                        <Button primary>Aplica</Button>
                                    </MenuLinkBtn>
                                ): (
                                    <MenuLinkBtn to="/aplica">
                                        <Button primary bigFont onClick={closeMenu}>Aplica</Button>
                                    </MenuLinkBtn>
                                )
                                }
                            </MenuItemBtn>
                            <MenuItemBtn>
                                {button?(
                                    <MenuLinkBtn to="/inicia-sesion">
                                        <Button primary>Inicia sesión</Button>
                                    </MenuLinkBtn>
                                ): (
                                    <MenuLinkBtn to="/inicia-sesion">
                                        <Button primary bigFont onClick={closeMenu}>Inicia sesión</Button>
                                    </MenuLinkBtn>
                                )
                                }
                            </MenuItemBtn>
                        </Menu>

                    </NavbarContainer>

                </Nav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar;