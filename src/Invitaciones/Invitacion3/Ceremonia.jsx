import React from "react";
import styled from "styled-components";

const Title = styled.span`
  margin-top: 40px;
  font-size: 70px;
  text-align: center;
  color: #42979d;
`
const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`

const SpanNombre = styled.span`
text-align: center;
  font-family: 'Times New Roman', Times, serif;
  font-size: 30px;
  color: #59bdc4;
`

const ButtonMapa = styled.button`
  margin-top: 10px;
  width: 150px;
  height: 40px;
  border-radius: 15px;
  border: 0px;
  font-size: 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: #c4eef1;
  color: #42979d;
`

const Image = styled.img`
  width: 100%;
  max-width: 430px;
  height: auto;
  margin-bottom: 20px;
`
function Ceremonia(){

  const goToMaps = () => {
    const googleMapsUrl = `https://www.google.es/maps/place/Villa+Laureana,+finca+bodas+madrid/@40.5814156,-3.585426,17z/data=!3m1!4b1!4m6!3m5!1s0xd43d3ec1a5c0347:0x94db3b4454be4921!8m2!3d40.5814116!4d-3.5828511!16s%2Fg%2F11fjzxqvsp?hl=es&entry=ttu`;

    // Abre la URL en una nueva pestaña
    window.open(googleMapsUrl, '_blank');
  }

  return(
    <>
      <Title>La Ceremonia</Title>
      <ContainerInfo>
      <Image src="../../../villalaureanaceremonias.jpeg"/>
        <SpanNombre>Villa Laureana</SpanNombre>
        <ButtonMapa onClick={() => {goToMaps()}}>Ver en mapa</ButtonMapa>
      </ContainerInfo>
      <Title>La Celebracion</Title>
      <Image src="../../../laureanaJardines.jpg"/>
      <ContainerInfo>
        <SpanNombre>La Granja de Villa Laureana</SpanNombre>
        <ButtonMapa onClick={() => {goToMaps()}}>Ver en mapa</ButtonMapa>
      </ContainerInfo>
    </>
  )
}

export default Ceremonia;