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
            .then(res => res.json())
            .then(data => {
                setGraphInfo(data);
            })
            .catch(err => console.log(err));

        fetch("../answers.json")
            .then(res => res.json())
            .then(data => {
                setAnswers(data);
            })
            .catch(err => console.log(err));

    }, []);

    return (
        <>
            <Nabvar pageInfo={pageInfo} />
            <div className="container">
                <h1>Resultados</h1>
                {
                    
                    graphInfo.map((graph, index) => (
                        <GraphComponent key={index} data={graph} />
                    ))

                }
                {
                    answers.map((answer, index) => (
                        <AnswersComponent key={index} data={answer} />
                    ))
                }
            </div>
        </>
    );
};

export default Articulo2;
