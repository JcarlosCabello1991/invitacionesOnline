import React, { useContext, useEffect, useState } from "react"
import styled, { keyframes }  from "styled-components"
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CartContext from "../Context/CartContext";


const Container = styled.div`
  text-align: center;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-content: center;
`
const ContainerModels = styled.div`
  text-align: center;
  display: grid;
  align-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 20px;
`

const Image = styled.img`
  width: 295px;
  height: auto;
`

const DivPrice = styled.div`
  background-color: #6dce6d;
  text-align: center;
  width: 50%;
  border-radius: 10px;
  line-height: normal;
  margin-top: 5px;
`

const BottomContainerPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 430px;
  gap: 10px;
`
const CartDiv = styled.button`
  background-color: rgb(255, 165, 0);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0px;
  height: 34px;
  width: 10%;
  border-radius: 10px;
  margin-top: 5px;
`
const style = {
  textDecoration:'none',
  color: "black",
  display: 'flex',
  flexDirection: "column",
  alignItems: 'center'
}

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const fadeInUp = keyframes`
  from {
    opacity: 0;
    bottom: 30px;
  }
  to {
    opacity: 1;
    bottom: 50px;
  }
`;

const fadeOutDown = keyframes`
  from {
    opacity: 1;
    bottom: 50px;
  }
  to {
    opacity: 0;
    bottom: 30px;
  }
`;

// Contenedor del Toast
const ToastContainer = styled.div`
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  min-width: 250px;
  margin-left: -140px;
  background-color: #9ccf6a;
  color: #000000;
  text-align: center;
  border-radius: 15px;
  padding: 16px;
  position: fixed;
  left: 50%;
  bottom: 30px;
  font-size: 24px;
  z-index: 1;
  opacity: ${(props) => (props.show ? '1' : '0')};
  animation: ${(props) => (props.show ? fadeInUp : fadeOutDown)} 1s ease-in-out;
`;

function Models(){

  const { addItemToCart, cartItems } = useContext(CartContext)
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if(cartItems.length > 0 && showToast){
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
    //eslint-disable-next-line
  },[cartItems])

  const handleAddToCart = (item) => {
    addItemToCart(item)
    setShowToast(true);
  };

  return(
    <Container>
      <h2>Nuestros Modelos</h2>
      <ContainerModels>
        <ContainerCard>
          <Link style={style} to="/invitacion1">
            <Image src="../../portadaInvitacion10.png" alt="invitacion1"/> 
            {
              cartItems.length>0 && cartItems[0].producto === "Invitacion1" && showToast &&
              <ToastContainer show={showToast}>
                ¡Producto añadido al carrito!
              </ToastContainer>
            }       
          </Link>
          <BottomContainerPrice>
            <DivPrice>80€</DivPrice>
            <CartDiv id="invitacion1" onClick={() => {handleAddToCart({producto: "Invitacion1", price:80})}}><AddShoppingCartIcon/></CartDiv>  
          </BottomContainerPrice>  
        </ContainerCard>       
        <ContainerCard>
          <Link style={style} to="/invitacion2">
            <Image src="../../portadaInvitacion20.png" alt="invitacion2"/>    
            {
              cartItems.length>0 && cartItems[0].producto === "Invitacion2" && showToast &&
              <ToastContainer show={showToast}>
                ¡Producto añadido al carrito!
              </ToastContainer>
            }               
          </Link>
          <BottomContainerPrice>
            <DivPrice>80€</DivPrice>
            <CartDiv id="invitacion2" onClick={() => {handleAddToCart({producto: "Invitacion2", price:80})}}><AddShoppingCartIcon/></CartDiv> 
          </BottomContainerPrice>  
        </ContainerCard>    
        <ContainerCard>
          <Link style={style} to="/invitacion3">
            <Image src="../../portadaInvitacion30.png" alt="invitacion3"/>  
            {
              cartItems.length>0 && cartItems[0].producto === "Invitacion3" && showToast &&
              <ToastContainer show={showToast}>
                ¡Producto añadido al carrito!
              </ToastContainer>
            }         
          </Link>
          <BottomContainerPrice>
            <DivPrice>90€</DivPrice>
            <CartDiv id="invitacion3" onClick={() => {handleAddToCart({producto: "Invitacion3", price:90})}}><AddShoppingCartIcon/></CartDiv> 
          </BottomContainerPrice>
        </ContainerCard>     
        <ContainerCard>
          <Link style={style} to="/invitacion4">
            <Image src="../../portadaInvitacion4.png" alt="invitacion4"/>
            {
              cartItems.length>0 && cartItems[0].producto === "Invitacion4" && showToast &&
              <ToastContainer show={showToast}>
                ¡Producto añadido al carrito!
              </ToastContainer>
            }
          </Link>
          <BottomContainerPrice>
            <DivPrice>90€</DivPrice>
            <CartDiv id="invitacion4" onClick={() => {handleAddToCart({producto: "Invitacion4", price:90})}}><AddShoppingCartIcon/></CartDiv> 
          </BottomContainerPrice>   
        </ContainerCard>
        <ContainerCard>
          <Link style={style} to="/invitacion5">
            <Image src="../../portadaInvitacion5.png" alt="invitacion5"/>
            {
              cartItems.length>0 && cartItems[0].producto === "Invitacion5" && showToast &&
              <ToastContainer show={showToast}>
                ¡Producto añadido al carrito!
              </ToastContainer>
            }
          </Link>
          <BottomContainerPrice>
            <DivPrice>90€</DivPrice>
            <CartDiv id="invitacion5" onClick={() => {handleAddToCart({producto: "Invitacion5", price:90})}}><AddShoppingCartIcon/></CartDiv> 
          </BottomContainerPrice>   
        </ContainerCard>
        <ContainerCard>
          <Link style={style} to="/personalizada">
            <Image src="../../personalizada.png" alt="personalizada"/>
            {
              cartItems.length>0 && cartItems[0].producto === "personalizada" && showToast &&
              <ToastContainer show={showToast}>
                ¡Producto añadido al carrito!
              </ToastContainer>
            }
          </Link>
          <BottomContainerPrice>
            <DivPrice>150€</DivPrice>
            <CartDiv id="personalizada" onClick={() => {handleAddToCart({producto: "personalizada", price:150})}}><AddShoppingCartIcon/></CartDiv> 
          </BottomContainerPrice> 
        </ContainerCard>        
      </ContainerModels>
    </Container>
  )
}

export default Models