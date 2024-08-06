import React from "react"
import Customized from "../../Descriptions/Customized"
import styled from "styled-components"


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`
const Image = styled.img`
  width: 100%;
  max-width: 430px;
  height: auto;
`

function Personalizada() {

  return(
    <Container>
      <Customized/>
      <br></br>
      <Image src="../../personalizada.png" alt="personalizada"/>
    </Container>
  )
}

export default Personalizada