import React from "react";
import styled from "styled-components";


const SpanNombre = styled.span`
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
  max-width: 430px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  margin-bottom: 10px;
`

const ContainerFormulario = styled.div`
  width: 100%;
  max-width: 430px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dda5f6;
  gap: 10px;
  padding-top: 10px;
`

const InputForm = styled.input`
  border-radius: 5px;
  border: 1px solid #dda5f6;
  width: 80%;
`
const Select = styled.select`
  border-radius: 5px;
  border: 1px solid #dda5f6;
  width: 82%;
`
const Button = styled.button`
  border-radius: 15px;
  border: 1px solid #dda5f6;
  width: 50%;
  background-color: white;
  color: black;
  margin-bottom: 20px;
`

function Formulario(){

  return(
    <>
      <SpanNombre>
        Vuestra presencia es el mayor regalo, pero si quieres hacer una aportación nuestro número de cuenta es:
        XXXX-XXXX-XXXX-XXXX<br></br><br></br>
        No olvides rellenar el formulario
      </SpanNombre>
      <ContainerFormulario>
        <InputForm type="text" name="invitados" value="Rodrigo" onChange={() => console.log("cambiando")} placeholder="Escribe tu nombre"/>
        <InputForm type="text" name="asistencia" value="Rodrigo" onChange={() => console.log("cambiando")} placeholder="Asistencia"/>
        <Select name="asistencia" value="Asistencia" onChange={() => console.log("cambiando")}>
          <option value="">Asistencia</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </Select>
        <Button>Enviar</Button>
      </ContainerFormulario>      
    </>
  )
}

export default Formulario;