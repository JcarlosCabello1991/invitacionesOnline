import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../Context/CartContext';
import styled from 'styled-components';

const ImageProduct = styled.img`
  width:100%;
  max-width: 200px;
`

const ContanerProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`
const ContainerForm = styled.div`
  width: 100%;
  max-width: 300px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;    
`
const IntraForm = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #721ae5;
  padding: 20px;
  border-radius: 15px;
  color: white;
  font-family: 'Montserrat';
  font-size: 20px;
  text-align: center;
`

const Whatsapp = styled.img`
  width: 50px;
  height: auto;
  margin-bottom: 20px;
`
function CheckoutForm(){
  const [imageProduct, setImageProduct] = useState();

  const { cartItems, removeItemFromCart } = useContext(CartContext)

  useEffect(() => {
    if(!!cartItems.length > 0){
      switch (cartItems[0].producto) {
        case "Invitacion1":
          setImageProduct("../../portadaInvitacion10.png")
          break;
        case "Invitacion2":
          setImageProduct("../../portadaInvitacion20.png")
          break;
        case "Invitacion3":
          setImageProduct("../../portadaInvitacion30.png")
          break;
        case "Invitacion4":
          setImageProduct("../../portadaInvitacion4.png")
          break;
        case "Invitacion5":
          setImageProduct("../../portadaInvitacion5.png")
          break;
        default:
          setImageProduct("../../personalizada.png")
          break;
      }
    }    
  },[cartItems])

  const openWhatsApp = (phoneNumber, message) => {
    const formattedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;
    window.open(url, '_blank');
  };

  const handleSubmit = async() => {
    const phone = '+34648036195'
    const message = `Hola, nos ha gustado el modelo ${cartItems[0].producto} y nos gustaría, saber como continuar con la compra del producto`
    openWhatsApp(phone,message)
    removeItemFromCart();
  }

  return(
    <div style={{width: '100%',display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <ContanerProduct>
        {cartItems.length > 0 && <ImageProduct src={imageProduct} alt={imageProduct}/>}
      </ContanerProduct>
      <ContainerForm>
        <IntraForm>
          <span style={{width: '100%',maxWidth: `300px` }}>
            Para contratar esta opción escribenos por email a:<br></br>
            invitaciones.online.info @gmail.com<br></br>
            o por whatsapp, indicanos la invitación que quieres,<br></br>
            nombres de los novios, si la invitacion tiene reproductor, 
            mandanos la canción, así como la/las fotos que quieras que aparezcan,
            hay modelos con 1 foto y con 2 fotos o escoge la opción personalizada, si ninguna te convence
          </span>
        </IntraForm>        
      </ContainerForm> 
      <Whatsapp src='../../whatsappIcon.png' alt='wahtsapp' onClick={handleSubmit}/>         
    </div>
  )
}

export default CheckoutForm