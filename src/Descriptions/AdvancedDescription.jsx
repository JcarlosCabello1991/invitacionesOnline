import React from "react"
import styled from "styled-components"

const Description = styled.div`
  width: 100%;
  max-width: 350px;
  height: auto;
  font-family: 'Montserrat';
`

function AdvancedDescripition({model}){

  return(
    <Description>
        El modelo {model} consta de:<br></br>
        - Logo de los novios<br></br>
        - Sección SAVE THE DATE<br></br>
        - Reproductor de canción escogida por los novios<br></br>
        - Contador<br></br>
        - 1 imagen de los novios<br></br>
        - Itinerario<br></br>
        - 1 imagen del lugar de la ceremonia<br></br>
        - Apertura de mapa con ubicación de ceremonia<br></br>
        - 1 imagen del lugar del banquete<br></br>
        - Apertura de mapa con ubicación del banquete<br></br>
        - Texto con Cuenta bancaria<br></br>
        - Formulario
      </Description>
  )
}

export default AdvancedDescripition