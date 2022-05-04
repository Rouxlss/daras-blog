import React from "react";


export const AnswersComponent = ({data}) => {

    const {question, answers} = data;

    return (
        <div className="answers-component">
            <div className="answers-question">
                {question}
            </div>
            <div className="answers-answers">
                <ul>
                    {
                        answers.map((answer, index) => (
                            <li key={index}>
                                <p>{answer}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};
