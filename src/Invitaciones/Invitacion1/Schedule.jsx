import React from "react";
import styled from "styled-components";
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import ChurchIcon from '@mui/icons-material/Church';
import CelebrationIcon from '@mui/icons-material/Celebration';
import TapasIcon from '@mui/icons-material/Tapas';
import RestaurantIcon from '@mui/icons-material/Restaurant';


const ContanerSchedule = styled.div`
  width: 150px;
  height: auto;
  border-radius: 50px;
  background-color: #e7e7e7;
  text-align: center;
  padding: 10px;
`
const SpanSchedule = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
  color: #929292;
`

const DivSpanSchedule = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

const DivRoute = styled.div`
  width: 20px;
  height: 100px;
  background-color: #e7e7e7;
`

const iconsStyle = {
  fontSize: '40px'
}
function Schedule(){

  return(
    <>
    <ContanerSchedule>
        <SpanSchedule>
          <DirectionsBusIcon style={iconsStyle}/>
          <DivSpanSchedule>
            <strong>12.00</strong>
            Transporte
          </DivSpanSchedule>          
        </SpanSchedule>
      </ContanerSchedule>
      <DivRoute>
      </DivRoute>
      <ContanerSchedule>
        <SpanSchedule>
          <ChurchIcon style={iconsStyle}/>
          <DivSpanSchedule>
            <strong>12.30</strong>
            Ceremonia
          </DivSpanSchedule>    
        </SpanSchedule>
      </ContanerSchedule>
      <DivRoute>
      </DivRoute>
      <ContanerSchedule>
        <SpanSchedule>
          <TapasIcon style={iconsStyle}/>
          <DivSpanSchedule>
            <strong>13.30</strong>
            Coktail
          </DivSpanSchedule>    
        </SpanSchedule>
      </ContanerSchedule>
      <DivRoute>
      </DivRoute>
      <ContanerSchedule>
        <SpanSchedule>
          <RestaurantIcon style={iconsStyle}/>          
          <DivSpanSchedule>
            <strong>15.00</strong>
            Banquete
          </DivSpanSchedule>    
          </SpanSchedule>
      </ContanerSchedule>
      <DivRoute>
      </DivRoute>
      <ContanerSchedule>
        <SpanSchedule>
          <CelebrationIcon style={iconsStyle}/>          
          <DivSpanSchedule>
            <strong>19.00</strong>
            Fiesta
          </DivSpanSchedule>    
        </SpanSchedule>
      </ContanerSchedule>
    </>
  )
}

export default Schedule;