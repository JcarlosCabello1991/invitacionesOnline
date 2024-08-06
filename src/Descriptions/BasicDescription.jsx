import React from "react";
import styled from "styled-components";
import AskInfo from "./AskInfo";

const Description = styled.div`
  width: 100%;
  max-width: 350px;
  height: auto;
  font-family: 'Montserrat';
  font-size: 18px;
`

function BasicDescription({model}){

  return(
    <Description>
        El modelo {model} consta de:<br></br>
        - <strong>Logo {model === "classic" ? "Classic" : "Red"} con espigas,</strong> con los nombres de los novios y vuestra fecha, perfecto para representar el día de vuestra unión<br></br>
        - <strong>Sección SAVE THE DATE,</strong> para que nadie se olvide de guardar el día más importante de vuestra nueva etapa<br></br>
        - <strong>Contador</strong> de los días que quedan para el enlace<br></br>
        - <strong>1 imagen de los novios,</strong> que se os vea felices!!<br></br>
        - <strong>Itinerario,</strong> para que nadie se pierda ningún momento!<br></br>
        - <strong>Apertura de mapa con ubicación de ceremonia,</strong> para que sepan llegar con el gps<br></br>
        - <strong>1 imagen del lugar del banquete,</strong> ideal para que vean el salon y se imaginen a vuestro lado<br></br>
        - <strong>Apertura de mapa con ubicación del banquete,</strong> para que sepan llegar y no quedarse con hambre<br></br>
        - <strong>Texto con Cuenta bancaria,</strong> pon algo gracioso para que no parezca que quieres su dinero, aunque sabemos que es así jejeje<br></br>
        - <strong>Formulario,</strong> para controlar quien va o no a la boda, intolerancias, transporte y más<br></br>
        <AskInfo/>
      </Description>
  )
}

export default BasicDescription