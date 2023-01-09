import React, { useState, useEffect } from "react";
import "../../styles/clock.scss";

const ClockHooks = (props) => {
  //Creamos los valores predefinidos
  const fechaNueva = new Date();

  const personaInicial = {
    edad: 0,
    nombre: "Daniel",
    apellidos: "Abad Noriega",
  };

  //Creamos los estados
  const [fecha, setFecha] = useState(fechaNueva);
  const [edad, setEdad] = useState(personaInicial.edad);

  //Utilizamos useEffect para sustituir el componentDidMount.
  useEffect(() => {
    const timerID = setInterval(() => newTick(), 999);
    return () => {
      clearInterval(timerID);
    }
  });

  function newTick() {
    setFecha(new Date());
    setEdad(edad + 1);
    console.log("Edad: " + edad);
    console.log("Fecha: " + fecha.toLocaleTimeString())
  };

  return (
    <div className="clock">
      <h1>Clock hooks</h1>
      <h2 className="subtitle">
        Hora Actual:
        {fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {personaInicial.nombre} {personaInicial.apellidos}
      </h3>
      <h1 className="title">Edad: {edad}</h1>
    </div>
  );
};

export default ClockHooks;
