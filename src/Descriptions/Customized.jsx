import React from "react"
import styled from "styled-components"
import AskInfo from "./AskInfo"

const Description = styled.div`
  width: 100%;
  max-width: 350px;
  height: auto;
  font-family: 'Montserrat';
  font-size: 18px;
`

const Note = styled.div`
  width: 100%;
  max-width: 350px;
  height: auto;
  font-family: 'Montserrat';
  font-size: 12px;
`

function Customized(){

  return(
    <Description>
        Si tu opción es la invitación <strong>personalizada</strong>, es porque, teneis muy claro lo que quieres en vuestra <strong>invitación de boda.</strong><br></br>
        Con esta opción podrás <strong>añadir y quitar</strong> todo lo que tu quieras, desde tu propio logo o usar uno de los que tenemos en los otros modelos de invitación,
        hasta poner todas las imagenes, textos y colores que deseeis, con <strong>3 revisiones incluidas</strong>.<br></br> Esto quiere decir, que desde que se os entregue, tendreis 
        3 revisiones, para cambiar cosas que no os convenzan demasiado, con el fin de tener una invitación completamente hecha a <strong>vuestra medida!!</strong><br></br>
        <AskInfo/>
        <Note>
          *importante: el formulario, es opcional, pero si se desea incluir, como máximo, tendrá los siguiente apartados: Asistencia a la boda, asistencia a la preboda,
          intolerancias, se necesitará autobus, si tienes hotel con dto y quieren hacer uso de ese hotel, también aparecerá en el formulario y apartado de canción sugerida por el invitado.
          No se podrán añadir más campos al formulario.*
        </Note>
    </Description>
  )
}

export default Customized