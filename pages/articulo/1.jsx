import React from "react";
import { Nabvar } from "../../components/Nabvar";

const Articulo1 = () => {
    const pageInfo = {
        title: `"Reseña sobre la evolución de la literatura salvadoreña"`,
        subtitle: "05-04-2020",
        img: "../img/img1.png",
    };

    return (
        <>
            <Nabvar pageInfo={pageInfo} />
            <div className="container">
                <p style={{ fontSize: 20, textAlign: "justify" }}>
                    El país de El Salvador siempre ha tenido una rica tradición
                    en las artes. Hoy, esta rica tradición también abarca el
                    mundo de la literatura. El elemento de las grandes obras
                    literarias se ha convertido ahora en un hecho especial para
                    los lectores de todo el mundo y cambió de ser letras a las
                    que nadie les tomaba importancia a convertirse en parte de
                    nuestra identidad nacional e internacional.
                    <br />
                    <br />
                    En los siglos correspondientes a la colonia hubo un
                    florecimiento literario considerable; reflejo de lo cual,
                    también en las posesiones americanas se verificó un notable
                    cultivo de las artes, especialmente la arquitectura, la
                    plástica y la música. La literatura salvadoreña empezó a
                    consolidarse como literatura propia del país luego del siglo
                    XIX, ya que anteriormente el territorio no era un país
                    independiente y formaba parte de la Federación
                    Centroamericana, por lo tanto, no se podría definir
                    literatura salvadoreña como tal antes de ese periodo. Hubo
                    un tiempo en que poetas y autores eran asesinados por sus
                    escritos y expresiones ya que muchos abarcaban el tema de la
                    religión, la política y la guerra, además tomaron bandos:
                    unos escritores eran de derecha y otros de izquierda. Debido
                    a las constantes amenazas y la muerte de muchos escritores,
                    los autores de la literatura salvadoreña tuvieron la
                    tendencia, o se caracterizaban, por hacer extensas
                    descripciones de los paisajes o tradiciones de nuestro país.
                    Aunque hoy en día, escribir en contra de los ideales del
                    gobierno todavía se lleva a cabo con un trasfondo cauteloso.
                    <br />
                    <br />
                    Hubo y hay muchos otros escritores y novelistas en El
                    Salvador y cada una de sus obras literarias ha ayudado a
                    formar y moldear el pensamiento de los pueblos de una época
                    determinada. Entre los autores más reconocidos de nuestro
                    país están: Claudia Lars, Roque Dalton, David Escobar
                    Galindo, Salarrué, etc.
                    <br />
                    <br />
                    Hoy en día, tener un poema o un libro publicado en El
                    Salvador no es tan difícil como pudo haber sido en el
                    pasado; existe una gama muy grande de escritos muy buenos
                    hechos por diferentes autores y mayoritariamente escritos
                    por las jóvenes generaciones.
                    <br />
                    <br />
                    Actualmente, la mayoría de los periódicos y editoriales son
                    de propiedad privada. Hay una legislación reciente que
                    indica que la libertad de expresión no necesariamente puede
                    publicar cosas “porque sí”, y que la privacidad o las
                    calumnias injustas deben tener prioridad sobre los derechos
                    de los escritores. Ser autor en El Salvador es una profesión
                    muy admirada y respetada.
                </p>
                <div className="fuentes">
                    <p>Fuentes:</p>
                    <ul>
                        <li>
                            <a href="http://literaturasv2018.blogspot.com/2018/11/origenes-de-la-literatura-salvadorena.html">
                                Martinez, B., & completo, V. (2022). Orígenes de
                                la Literatura Salvadoreña. Retrieved 28 April
                                2022
                            </a>
                        </li>
                        <br />
                        <li>
                            <a href="https://sites.google.com/site/patrimonioes/escritores">
                                ESCRITORES - Patrimonio Cultural de El Salvador.
                                (2022). Retrieved 28 April 2022
                            </a>
                        </li>
                        <br />
                        <li>
                            <a href="https://www.wiki.es-es.nina.az/Literatura_de_El_Salvador.html">
                                (2022). Retrieved 28 April 2022
                            </a>
                        </li>
                        <br />
                        <li>
                            <a href="https://latamjournalismreview.org/es/articles/ley-de-proteccion-a-periodistas-en-el-salvador-esta-aun-lejos-de-lograrse-a-pesar-del-aumento-de-ataques/">
                                Ley de protección a periodistas en El Salvador
                                está aún lejos de lograrse a pesar del aumento
                                de ataques - LatAm Journalism Review. (2022).
                                Retrieved 28 April 2022
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Articulo1;
