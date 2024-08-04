import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Schedule from "./Schedule";
import Ceremonia from "./Ceremonia";
import Formulario from "./Formulario";
import BasicDescription from "../../Descriptions/BasicDescription";
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
  width: 90%;
  max-width: 400px;
  height: auto;
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
  color: #A62C31;
  width: 75px;
  text-align: center;
`
const DateSpanWord = styled.span`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
  color: #A62C31;
  width: 75px;
  text-align: center;
`

function Invitacion2() {

  const fechaObjetivo = new Date('2025-07-12T13:00:00');

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [date, setDate] = useState({
    dias: "",
    horas:"", 
    minutos:"",
    segundos:""
  });

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

  return(
    <Container>
      <BasicDescription model={"Red"}/>
      <br></br>
      <Image src="../../../encabezado2.png" alt="encabezado1"/>
      <ImageSave src="../../../saveTheDateRedRB.png" alt="encabezado2"/>
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
      <ImageBride src="../../../valentin.webp" alt="novios"/>
      <Schedule/>
      <Ceremonia/>
      <Formulario/>
    </Container>
  )
}

export default Invitacion2