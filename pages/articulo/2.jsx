import React, { useEffect, useState } from "react";
import { Nabvar } from "../../components/Nabvar";
import { Doughnut } from "react-chartjs-2";
import { GraphComponent } from "../../components/GraphComponent";
import { AnswersComponent } from "../../components/AnswersComponent";

const Articulo2 = () => {
    const pageInfo = {
        title: `"Encuesta: ¿Cuánto conoces de la literatura salvadoreña?"`,
        subtitle: "05-02-2020",
        img: "../img/img2.png",
    };
    // get data from json file with fetch
    const [graphInfo, setGraphInfo] = useState([]);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        fetch("../graphInfo.json")
            .then((res) => res.json())
            .then((data) => {
                setGraphInfo(data);
            })
            .catch((err) => console.log(err));

        fetch("../answers.json")
            .then((res) => res.json())
            .then((data) => {
                setAnswers(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <Nabvar pageInfo={pageInfo} />
            <div className="container">
                <p style={{ fontSize: 20, textAlign: "justify" }}>
                    El motivo de este trabajo, realizado durante el período II,
                    no es otro que conocer qué tanto conocen de literatura
                    salvadoreña los y las habitantes de El Salvador. Para ello
                    hemos realizado una encuesta para observar opiniones, que
                    tanto saben sobre el contexto en el que se ha desarrollado,
                    sus temáticas, sus autores, etc.
                    <br />
                    <br />
                    <b>OBJETIVO DE LA ENCUESTA: </b>
                    Obtener información sobre qué tanto conocen de literatura
                    salvadoreña los y las habitantes de El Salvador.
                </p>
                <div className="link">
                    <i className="fa-solid fa-link"></i> Link de la encuesta:{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://forms.gle/jUt6aJkC4NbgBunU8"
                    >
                        https://forms.gle/jUt6aJkC4NbgBunU8
                    </a>
                </div>
                <br />
                <br />
                <h1>Resultados</h1>
                {graphInfo.map((graph, index) => (
                    <GraphComponent key={index} data={graph} />
                ))}
                {answers.map((answer, index) => (
                    <AnswersComponent key={index} data={answer} />
                ))}
                <h3 style={{ fontSize: 20, textAlign: "justify" }}>Conclusión</h3>
                <p style={{ fontSize: 20, textAlign: "justify" }}>
                    De acuerdo con lo observado en los resultados
                    obtenidos de la encuesta aplicada a los habitantes de El
                    Salvador, se concluyó que existe un gran conocimiento de
                    literatura salvadoreña entre los y las participantes. Se
                    observaron la variedad de respuestas y opiniones sobre el
                    contexto en el que se ha desarrollado, sus temáticas, sus
                    autores, etc.
                </p>
            </div>
        </>
    );
};

export default Articulo2;
