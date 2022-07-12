import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {Container} from '../../Globalstyles';

export const Nav = styled.nav` 
font-size: 18px;
position: fixed;
width : 100%;
top: 0;
z-index: 999;
height: 80px;
background-color: #f6f6f6;
/* box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5); */
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 600px) {
    width: 600px;
}
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
${Container};

`;

export const NavLogo = styled(Link)`
background: url("https://firebasestorage.googleapis.com/v0/b/prueba-context-ecommerce.appspot.com/o/logo_academclone.png?alt=media&token=385f7d02-a920-4a4b-8ad2-f131f8582932");
color: #fff;
cursor: pointer;
display: flex;
align-items: center;
// text-decoration: none;
font-size: 2.5rem;
font-weight: 5;
transition: all .5s ease;
&:hover{
    transform: scale(1.1);
}
@media (max-width: 600px) {
    color: #fff;
    width: 120px;
    height: 70px;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 5; 
}
`;



export const MenuIcon = styled.div`
display: none;
@media (max-width: 600px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    font-size: 4rem;
    cursor: pointer;
    // width   : 600px;
}
`;

export const Menu = styled.ul`
display: flex;
align-items: center;
text-align: center;
@media only screen and (max-width:600px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => click ? '0' : '-100%'};
    background-color: #fefefe;
    transition: all .5s ease;
}
`;

export const MenuItem = styled.li`
list-style: none;
height: 80px;
@media only screen and (max-width:600px){
    width: 100%;
    &:hover {
        border: none;
    }
}
`;

export const MenuLink = styled(Link)`
text-decoration: none;
font-weight: bold;
font-size: 1.2rem;
color: #333;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.2rem 3rem;
height: 100%;
transition: all .2s ease;
&:hover {
    color: #000;
    transform: traslateY(-3rem);
    
}
&:active {
    transform: traslateY(3rem);
    color: #000;
}
@media only screen and (max-width:600px){
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all .2s ease;
}
`;

export const MenuItemBtn = styled.li`
list-style: none;
@media screen and (max-width:700px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 120px;
}
`;

export const MenuLinkBtn = styled(Link)`
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
padding: 1px 16px ;
height: 100%;
width: 100%;
border: none;
outline: none;
`;