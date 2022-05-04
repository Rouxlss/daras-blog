import React from "react";
import { Nabvar } from "../../components/Nabvar";
import { SampleComponent } from "../../components/SampleComponent";

const Articulo3 = () => {
    const pageInfo = {
        title: `"Muestras literarias"`,
        subtitle: "05-04-2020",
        img: "../img/img3.png",
    };

    return (
        <>
            <Nabvar pageInfo={pageInfo} />
            <SampleComponent />
        </>
    );
};

export default Articulo3;
