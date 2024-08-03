import React from "react";
import styled from "styled-components";

const ContainerBanner = styled.div`
  background-color: #ffc966;
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 20px;
  padding: 0px 20px 20px 20px;
`
function Footer(){

  return (
    <ContainerBanner>
      <p>Plazo de entrega de la invitación 7 días laborales, personalizadas 14 días laborales</p>
      <span>Todas nuestras entregas disponen de una web para los novios, en la que pueden ver la información envíada por cada invitado</span>
    </ContainerBanner>
  );
}

export default Footer;