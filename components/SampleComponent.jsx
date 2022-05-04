import React, { useState } from "react";
import Link from "next/link";

export const SampleComponent = () => {
    
    const [post, setPost] = useState([
        {
            title: "El silencio amargo",
            date: "Mónica Roxana Rodríguez Henríquez",
            tag: "Poema",
        },
        {
            title: "Flores sin nombre",
            date: "Dara Heliana Rodríguez Villacorta",
            tag: "Poema",
        },
        {
            title: "No es amor, es maltrato",
            date: "Karla Linet Solano Mejía",
            tag: "Poema",
        },
    ]);

    return (
        <>
            <div className="posts">
                {post.map((post, index) => (
                    <Link key={index} href={`/muestra/${index+1}`}>
                        <div className="post" >
                            <div className="post-image">
                                <img src={`../img/sample${index + 1}.png`} alt="" />
                            </div>
                            <div className="post-title">
                                <p>"{post.title}"</p>
                            </div>
                            <div className="post-footer">
                                <p className="date">
                                    {post.date}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};
