import React from 'react'
import { Nabvar } from '../../components/Nabvar'

const Articulo2 = () => {

    const pageInfo = {
        title: `"Encuesta: ¿Cuánto conoces de la literatura salvadoreña?"`,
        subtitle: "05-02-2020",
        img: "../img/img2.png",
    }

  return (
    <Nabvar pageInfo={pageInfo}/>
  )
}

export default Articulo2