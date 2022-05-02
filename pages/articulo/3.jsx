import React from "react";
import { Nabvar } from "../../components/Nabvar";

const Articulo3 = () => {
    const pageInfo = {
        title: `"Muestras literarias"`,
        subtitle: "05-02-2020",
        img: "../img/img3.png",
    }
    
    return (
        <Nabvar pageInfo={pageInfo} />
    );
};

export default Articulo3;
