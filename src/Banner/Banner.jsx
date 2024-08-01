import React from "react";
import styled from "styled-components";

const ContainerBanner = styled.div`
  background-color: #ffc966;
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 20px;
  padding: 0px 20px 20px 20px;
`
function Banner(){

  return (
    <ContainerBanner>
      <p>Plazo de entrega de la invitación 2 - 3 días, personalizadas 7 días</p>
      <span>Todas nuestras entregas disponen de una web para los novios, en la que pueden ver la información envíada por cada invitado, puedes ver una prueba haciendo click aquí</span>
    </ContainerBanner>
  );
}

export default Banner;