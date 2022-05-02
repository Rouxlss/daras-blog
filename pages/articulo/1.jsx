import React from "react";
import { Nabvar } from "../../components/Nabvar";

const Articulo1 = () => {

    const pageInfo = {
        title: `"Reseña sobre la evolución de la literatura salvadoreña"`,
        subtitle: "05-02-2020",
        img: "../img/img1.png",
    }
    
    return (
        <Nabvar pageInfo={pageInfo} />
    );
};

export default Articulo1;
