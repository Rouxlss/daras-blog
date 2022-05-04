import React, { useEffect, useState } from "react";
import { Nabvar } from "../../components/Nabvar";
import { Doughnut } from "react-chartjs-2";
import { GraphComponent } from "../../components/GraphComponent";
import { AnswersComponent } from "../../components/AnswersComponent";

const Articulo2 = () => {
    const pageInfo = {
        title: `"Flores sin nombre"`,
        subtitle: "Dara Heliana Rodríguez Villacorta",
        img: "../img/sample2.png",
    };

    return (
        <>
            <Nabvar pageInfo={pageInfo} />
            <div className="container">
                <p style={{ fontSize: 20, textAlign: "center" }}>
                    Pueblo conocido por sus riquezas, <br />
                    cultura llena de luces brillantes, <br />
                    impartiendo versos llenos de grandezas <br />
                    siendo las únicas importantes.
                    <br />
                    <br />
                    No dejes que la historia aparte esas voces, <br />
                    voces únicas para el aliento de aquellas <br />
                    que imploran la igualdad que no conoces <br />
                    y por generaciones no dejan huellas.
                    <br />
                    <br />
                    Cultura de azul y blanco, te quejas otra vez, <br />
                    quejas por mujeres que construyen un bello futuro, <br />
                    futuro que tú aún no asumes que fue duro, <br />
                    ¿cuándo será el día que madures?
                    <br />
                    <br />
                    Dime patria mía, ¿por qué impones papeles? <br />
                    ¿Lo haces por algún temor? <br />
                    ¿Por mujeres que están a tus mismos niveles? <br />
                    ¿Por tener su propio espíritu trabajador?
                    <br />
                    <br />
                    Porque se tuvieron que ganar el respeto, <br />
                    sin importar el dominio en letras <br />
                    ni las métricas o sinalefas, <br />
                    este siempre fue incompleto.
                    <br />
                    <br />
                    ¿No importó acaso la belleza <br />
                    de la escritura propuesta? <br />
                    Nunca fue suficiente la mesa <br />
                    aunque ella desangrada belleza.
                    <br />
                    <br />
                    ¿La habilidad nunca bastó para ti? <br />
                    Antes de ello, ¿va el físico acaso? <br />
                    acompañado siempre de un comentario <br />
                    que recuerda la posición en sí.
                    <br />
                    <br />
                    Lloran del alma porque no ves, <br />
                    aun existiendo con ellos <br />
                    siempre a la par de sus destellos, <br />
                    pero así el nombre desconoces y con ello…
                    <br />
                    <br />
                    No se recuerdan los escritos de Claudia Lars, <br />
                    ni los trabajos de Matilde Elena López, <br />
                    por que todos sus mensajes y voces, <br />
                    hacen muchísimo más que promesas muertas.
                    <br />
                    <br />
                    Las escritoras necesitan revertir el hechizo <br />
                    ese que las borra de los libros, <br />
                    el que las dejó solas en los rincones sombríos, <br />
                    ese que desaparecer a todas de la historia hizo.
                    <br />
                    <br />
                    Ellas viajan por el mundo <br />
                    proclamando justicia en sus logros <br />
                    defendiendo la libertad de sus escritos <br />
                    y queriendo destapar lo oculto.
                    <br />
                    <br />
                    Pintando y escribiendo arcoíris de colores <br />
                    con sus sentimientos y miradas, <br />
                    con sus lienzos, lápices <br />
                    y sus manos lastimadas.
                    <br />
                    <br />
                    Las mujeres escritoras de El Salvador <br />
                    viven con la esperanza y anhelo <br />
                    de que su país les tenga reconocimiento.
                    <br />
                    <br />
                    Aún así, seguirán construyendo metáforas amables, <br />
                    en su país, un pulgarcito tan pequeño, <br />y demostraran
                    la fuerza de nuestros deseos.
                </p>
            </div>
        </>
    );
};

export default Articulo2;
