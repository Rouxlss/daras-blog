import React from "react";

export const GraphComponent = ({ data }) => {

    const { question, info, img } = data;

    return (
        <>
            <div className="graph-component">
                <div className="graph-question">{question}</div>
                <div className="graph-img">
                    <img src={img} alt="" />
                </div>
                <h4>Análisis:</h4>
                <div className="graph-info">
                    <p>{info}</p>
                </div>
            </div>
        </>
    );
};
