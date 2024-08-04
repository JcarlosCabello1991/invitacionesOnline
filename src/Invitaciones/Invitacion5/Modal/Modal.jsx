import React, { useState } from "react"
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styled, { keyframes } from "styled-components";
import './fonts.css'

const slideUp = keyframes`
  from {
    transform: translate(-50%, 100%);
    width: 0;
  }
  to {
    transform: translate(-50%, -50%);
    width: 70%;
  }
`;

const slideDown = keyframes`
  from {
    transform: translate(-50%, -50%);
    width: 70%;
  }
  to {
    transform: translate(-50%, 100%);
    width: 0;
  }
`;

const AnimatedBox = styled(Box)`
  animation: ${props => props.isClosing ? slideDown : slideUp} 0.5s ease-out forwards;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  maxWidth: '430px !important',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'#c4eef1',
};

const Paragraph = styled.p`
  font-size: 32px;
  text-align: center;
  font-family: 'Montserrat';
`
const Button = styled.button`
  background-color: #42979d; 
  border: 0px; 
  border-radius: 5px; 
  color: white; 
  margin-left:50px; 
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-family: 'Montserrat';
`
const Span = styled.p`
  font-size: 16px;
  text-align: center;
  font-family: 'Montserrat';
`
function ModalComponent(props){

  const {
    showNotice,
    setShowNotice
  } = props

  const [charging, setCharging] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const closeInvitacion = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowNotice(false);
      setCharging(false);
      setIsClosing(false);
    }, 500);
  }

  return(
    <Modal
      open={showNotice || isClosing}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <AnimatedBox sx={style} isClosing={isClosing}>
        {
          charging ? 
          <CircularProgress/> :
          <>
            <Paragraph>
              Rachel y Morgan, quieren compartir esto contigo!
            </Paragraph>
            <Span>Pop up incluido en la invitación</Span>
            <Button onClick={() => closeInvitacion()}>Abrir</Button>
          </>       
        }
      </AnimatedBox>
    </Modal>
  )
}

export default ModalComponent