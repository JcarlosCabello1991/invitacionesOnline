import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Schedule from "./Schedule";
import Ceremonia from "./Ceremonia";
import Formulario from "./Formulario";
import ModalComponent from "./Modal/Modal";
import ReactAudioPlayer from 'react-audio-player';
import AdvancedDescripition from "../../Descriptions/AdvancedDescription";
import { useLocation } from "react-router-dom";


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
const ImageSave = styled.img`
  margin-top: 20px;
  width: 90%;
  max-width: 400px;
  height: auto;
  margin-bottom: 10px;
`

const ImageBride = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-top: 20px;
  border-radius: 15px;
  margin-bottom: 20px;
`

const DivDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  gap: 10px;
`

const DateSpan = styled.span`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 50px;
  color: #454545;
  width: 75px;
  text-align: center;
`
const DateSpanWord = styled.span`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
  color: #454545;
  width: 75px;
  text-align: center;
`

function Invitacion3() {

  const fechaObjetivo = new Date('2025-07-12T13:00:00');

  const [date, setDate] = useState({
    dias: "",
    horas:"", 
    minutos:"",
    segundos:""
  });
  const [showNotice, setShowNotice] = useState(true);
  const audioRef = useRef(null);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const actualizarContador = () => {
    const ahora = new Date();

    // Calcula la diferencia en milisegundos entre las fechas
    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
        // Si la fecha objetivo ha pasado, muestra un mensaje o realiza alguna acción
        console.log('Ya ha pasado la fecha objetivo.');
        return;
    }

    // Calcula días, horas, minutos y segundos
    let segundosTotales = Math.floor(diferencia / 1000);
    let segundos = segundosTotales % 60;
    let minutos = Math.floor(segundosTotales / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    horas %= 24;
    minutos %= 60;
    setDate({
      dias: dias.toString(),
      horas: horas.toString(),
      minutos: minutos.toString(),
      segundos: segundos.toString()
    })

  };

  setInterval(actualizarContador, 1000);

  useEffect(() => {
    actualizarContador();
    //eslint-disable-next-line
  },[]);

  useEffect(() => {
    if(audioRef.current != null && !showNotice){
      audioRef.current.audioEl.current.play()
    }
  },[showNotice]);

  return(
    <Container>
      {
        showNotice && <ModalComponent setShowNotice={setShowNotice} showNotice={showNotice}/>
      }
      <AdvancedDescripition model={"Montserrat"} />
      <br></br>
      <Image src="../../../encabezado3.png" alt="encabezado1"/>
      <ImageSave src="../../../saveTheDateMontRB.png" alt="encabezado2"/>
      <div style={{display: 'flex', justifyContent: 'center', width: 'auto'}}>
        <ReactAudioPlayer 
          ref={audioRef}
          src='../../../perfect.mp3'
          autoPlay={false}
          controls
          progressDisplay="none"
          />
      </div>
      <DivDate>
        <DateSpan>{date.dias}</DateSpan>
        <DateSpan>{date.horas}</DateSpan>
        <DateSpan>{date.minutos}</DateSpan>
        <DateSpan>{date.segundos}</DateSpan>
      </DivDate>
      <DivDate>
        <DateSpanWord>Días</DateSpanWord>
        <DateSpanWord>horas</DateSpanWord>
        <DateSpanWord>Min</DateSpanWord>
        <DateSpanWord>Seg</DateSpanWord>
      </DivDate>
      <ImageBride src="../../../noviosbici.jpg" alt="novios"/>
      <Schedule/>
      <Ceremonia/>
      <Formulario/>
    </Container>
  )
}

export default Invitacion3