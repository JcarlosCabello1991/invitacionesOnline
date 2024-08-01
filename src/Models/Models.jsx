import React, { useContext } from "react"
import styled from "styled-components"
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
const SpanMsg = styled.span`
  margin-top: 10px;
`

function Models(){

  const { addItemToCart, cartItems } = useContext(CartContext)

  const handleAddToCart = (item) => {
    addItemToCart(item)
  };

  return(
    <Container>
      <h2>Nuestros Modelos</h2>
      <ContainerModels>
        <ContainerCard>
          <Link style={style} to="/invitacion1">
            <Image src="../../portadaInvitacion10.png" alt="invitacion1"/>        
          </Link>
          <BottomContainerPrice>
            <DivPrice>80€</DivPrice>
            <CartDiv id="invitacion1" onClick={() => {handleAddToCart({producto: "Invitacion1", price:80})}}><AddShoppingCartIcon/></CartDiv>  
          </BottomContainerPrice>  
          {cartItems.length>0 && cartItems[0].producto === "Invitacion1" && <SpanMsg>Producto añadido al carrito</SpanMsg>}
        </ContainerCard>       
        <ContainerCard>
          <Link style={style} to="/invitacion2">
            <Image src="../../portadaInvitacion20.png" alt="invitacion2"/>                   
          </Link>
          <BottomContainerPrice>
            <DivPrice>80€</DivPrice>
            <CartDiv id="invitacion2" onClick={() => {handleAddToCart({producto: "Invitacion2", price:80})}}><AddShoppingCartIcon/></CartDiv> 
          </BottomContainerPrice>  
          {cartItems.length>0 && cartItems[0].producto === "Invitacion2" && <SpanMsg>Producto añadido al carrito</SpanMsg>}
        </ContainerCard>    
        <ContainerCard>
          <Link style={style} to="/invitacion3">
            <Image src="../../portadaInvitacion30.png" alt="invitacion3"/>           
          </Link>
          <BottomContainerPrice>
            <DivPrice>90€</DivPrice>
            <CartDiv id="invitacion3" onClick={() => {handleAddToCart({producto: "Invitacion3", price:90})}}><AddShoppingCartIcon/></CartDiv> 
          </BottomContainerPrice>
          {cartItems.length>0 && cartItems[0].producto === "Invitacion3" && <SpanMsg>Producto añadido al carrito</SpanMsg>}
        </ContainerCard>     
        <ContainerCard>
          <Link style={style} to="/invitacion4">
            <Image src="../../portadaInvitacion4.png" alt="invitacion4"/>
          </Link>
          <BottomContainerPrice>
            <DivPrice>90€</DivPrice>
            <CartDiv id="invitacion4" onClick={() => {handleAddToCart({producto: "Invitacion4", price:90})}}><AddShoppingCartIcon/></CartDiv> 
          </BottomContainerPrice>   
          {cartItems.length>0 && cartItems[0].producto === "Invitacion4" && <SpanMsg>Producto añadido al carrito</SpanMsg>}
        </ContainerCard>
        <ContainerCard>
          <Link style={style} to="/invitacion5">
            <Image src="../../portadaInvitacion5.png" alt="invitacion5"/>
          </Link>
          <BottomContainerPrice>
            <DivPrice>90€</DivPrice>
            <CartDiv id="invitacion5" onClick={() => {handleAddToCart({producto: "Invitacion5", price:90})}}><AddShoppingCartIcon/></CartDiv> 
          </BottomContainerPrice>   
          {cartItems.length>0 && cartItems[0].producto === "Invitacion5" && <SpanMsg>Producto añadido al carrito</SpanMsg>}
        </ContainerCard>
        <ContainerCard>
          <Image src="../../personalizada.png" alt="personalizada"/>
          <BottomContainerPrice>
            <DivPrice>150€</DivPrice>
            <CartDiv id="personalizada" onClick={() => {handleAddToCart({producto: "personalizada", price:150})}}><AddShoppingCartIcon/></CartDiv> 
          </BottomContainerPrice>   
          {cartItems.length>0 && cartItems[0].producto === "personalizada" && <SpanMsg>Producto añadido al carrito</SpanMsg>}
        </ContainerCard>        
      </ContainerModels>
    </Container>
  )
}

export default Models