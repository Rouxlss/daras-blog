import React, { useState } from "react";
import Link from "next/link";

export const PostComponent = () => {
    const [post, setPost] = useState([
        {
            title: "Reseña sobre la evolución de la literatura salvadoreña",
            date: "02-05-2020",
            tag: "Literatura",
        },
        {
            title: "Encuesta: ¿Cuánto conoces de la literatura salvadoreña?",
            date: "02-05-2020",
            tag: "Encuesta",
        },
        {
            title: "Muestras literarias",
            date: "02-05-2020",
            tag: "Literatura",
        },
    ]);

    return (
        <>
            <div className="posts">
                {post.map((post, index) => (
                    <Link href={`/articulo/${index+1}`}>
                        <div className="post" key={index}>
                            <div className="post-image">
                                <img src={`./img/img${index + 1}.png`} alt="" />
                            </div>
                            <div className="post-title">
                                <p>{post.title}</p>
                            </div>
                            <div className="post-footer">
                                <p className="post-tag">{post.tag}</p>
                                <p className="date">
                                    <i className="fa-light fa-calendar-days"></i>{" "}
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
