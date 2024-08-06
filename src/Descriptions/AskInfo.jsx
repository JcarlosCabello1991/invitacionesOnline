import React from "react"
import styled from "styled-components"

const Note = styled.div`
 width: 100%;
  max-width: 350px;
  height: auto;
  font-family: 'Montserrat';
  font-size: 18px;
`

function AskInfo(){

  return(
    <Note>
      Para solicitar, la realización de cualquier invitación, deberéis escribir a invitaciones.online.info@gmail.com y os diremos como proceder, para conseguir vuestra 
      invitacion tan soñada!
    </Note>
  )
}

export default AskInfo