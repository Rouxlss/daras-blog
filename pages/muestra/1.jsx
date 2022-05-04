import React from "react";
import { Nabvar } from "../../components/Nabvar";

const Articulo1 = () => {
    const pageInfo = {
        title: `"El silencio amargo"`,
        subtitle: "Mónica Roxana Rodríguez Henríquez",
        img: "../img/sample1.png",
    };

    return (
        <>
            <Nabvar pageInfo={pageInfo} />
            <div className="container">
                <p style={{ fontSize: 20, textAlign: "center" }}>
                    ¡Oh vida mía¡¿cuántos golpes más soportarás?
                    <br />
                    ¿cuánto más sufrirás solo y en la oscuridad? <br />
                    ¿podrás contener tus lágrimas o llorarás? <br />
                    y levantarte sin dejar caer tu dignidad.
                    <br />
                    <br />
                    Por ti quiero mover cielo, tierra y mar, <br />
                    para mantener tu corazón tranquilo, <br />
                    aunque la injusticia nunca va a cesar, <br />
                    lloraré siempre en el completo sigilo. <br />
                    <br />
                    <br />
                    Aquellas noches de pura peligrosidad, <br />
                    donde solía salir solo a caminar, <br />
                    sin darte cuenta del riesgo de la realidad, <br />
                    sin imaginar que lo peor te podría pasar.
                    <br />
                    <br />
                    Aún recuerdo esa última llamada.
                    <br />
                    que heló mi corazón al oírte sollozar.
                    <br />
                    tenías miedo, yo estaba preocupada,
                    <br />
                    que nada malo sucediera, empecé a rezar
                    <br />
                    <br />
                    ¿Podremos ser libres y poder vivir en paz?
                    <br />
                    No sé con certeza que será lo que vendrá,
                    <br />
                    pero por favor, no te mortifiques más.
                    <br />
                    <br />
                    El miedo y el terror nos consume cada día.
                    <br />
                    Al entrar a tu cuarto veo tu abrigo
                    <br />
                    y cada despertar es una agonía
                    <br />
                    al darme cuenta de que tú ahora ya no estás conmigo.
                    <br />
                    <br />
                    Juro por Dios que algún día vengaré.
                    <br />
                    Ese enorme vacío que cubre mi ser.
                    <br />
                    Lucharé, gritaré y la manera trataré,
                    <br />
                    tan fuerte diré que nadie me podrá detener.
                    <br />
                    Como la furia de un león parecer.
                    <br />
                    <br />
                    Aunque vengándote mi muerte provoque,
                    <br />
                    mi sangre derramar por ti será un placer.
                    <br />
                    No habrá acción que por ti me equivoque.
                    <br />
                    Juntarme contigo, poder volver a nacer.
                </p>
            </div>
        </>
    );
};

export default Articulo1;
