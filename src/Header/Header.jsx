import React, { useContext, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CartContext from '../Context/CartContext';

const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: rgb(255, 255, 255);
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
const NameStyle = styled.span`
  color: red;
  font-weight: bold;
`
const Sections = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  padding: 0px 50px 0px 50px;
`
const Name = styled.span`
  min-width: fit-content;
  font-size: 30px;
`

const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  font-size: 30px;
`

const Option = styled.span`
  text-decoration: underline;
  cursor: pointer;
`

const ContainerResponsive = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const SideMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0,0,0,0.5);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  
  &.open {
    transform: translateX(0);
  }
`;

const MenuContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const style = {
  textDecoration:'none', color: "black"
}

const styleLink = {
  textDecoration:'none', 
  color: "black",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}

const DivCart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const ContainerQuantity = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  background-color:red;
  border-radius: 25px;
  margin-bottom: 15px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-right: 5px;
`

const Quantity = styled.span`
  position: absolute;
  color: white;
  font-size: 18px;
`

function Header(){

  const { cartItems } = useContext(CartContext)

  const windowWidth = window.innerWidth

  const [selectedOption, setSelectedOption] = useState("modelos")
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);
  const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (
      menuRef.current && 
      !menuRef.current.contains(event.target) && 
      menuIconRef.current && 
      !menuIconRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const showMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const goTo = (component) => {
    navigate(component)
    setIsMenuOpen(false)
  }

  return(
    <HeaderBar>
      {
        windowWidth >= 500 
        ?
        <>
          <Name>Invitaciones<NameStyle>Online</NameStyle></Name>
          <Sections>
            <Options> 
              {selectedOption === "modelos" ? <Option onClick={() => {goTo("/")}}>Modelos</Option> : <Link style={style} to="/" onClick={()=>setSelectedOption("modelos")}>Modelos</Link>}
            </Options>
          </Sections>   
          <DivCart>
            <Link style={styleLink} to="/shopping"><ShoppingCartIcon/></Link>
              {cartItems.length > 0 && <ContainerQuantity><Quantity>{ cartItems.length}</Quantity></ContainerQuantity>}
          </DivCart> 
        </>
        :
        <>
          <Name>Invitaciones<NameStyle>Online</NameStyle></Name>
          <ContainerResponsive>
          <DivCart>
            <Link style={styleLink} to="/shopping"><ShoppingCartIcon/></Link>
              {cartItems.length > 0 && <ContainerQuantity><Quantity>{ cartItems.length}</Quantity></ContainerQuantity>}
              </DivCart> 
              <MenuIcon ref={menuIconRef} onClick={() => {showMenu()}}/>
          </ContainerResponsive> 
        </>
      }
      <SideMenu ref={menuRef} className={isMenuOpen ? 'open' : ''}>
        <CloseIcon onClick={showMenu}/>
        <MenuContent>
          {selectedOption === "modelos" ? <Option onClick={() => {goTo("/")}}>Modelos</Option> : <Link style={style} to="/" onClick={()=>setSelectedOption("modelos")}>Modelos</Link>}
        </MenuContent>
      </SideMenu>
    </HeaderBar>
  );
}

export default Header;