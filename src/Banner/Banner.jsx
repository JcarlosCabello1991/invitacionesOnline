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
      <p>Haz que tu día, sea único y especial</p>
      <span>Eligiendo uno de nuestros modelos o personaliza uno a tu gusto!</span>
    </ContainerBanner>
  );
}

export default Banner;