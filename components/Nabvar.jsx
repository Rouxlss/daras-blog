import React, { useEffect, useRef } from "react";
import Link from "next/link";

export const Nabvar = ({ pageInfo }) => {

    const menuRef = useRef(null);
    const closeBtn = useRef(null);
    const openBtn = useRef(null);

    const hideMenu = () => { 
        menuRef.current.classList.add("hide-menu");
    }

    const showMenu = () => { 
        menuRef.current.classList.remove("hide-menu");
    }
    
    return (
        <header>
            <div ref={openBtn} onClick={showMenu} className="menu-button">
                <i class="fa-regular fa-bars"></i>
            </div>
            <nav ref={menuRef} className="hide-menu">
                <div className="close" onClick={hideMenu} ref={closeBtn}>
                    <i class="fa-regular fa-xmark"></i>
                </div>
                <ul>
                    <li>
                        <Link href="/">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/articulo/1">Reseña</Link>
                    </li>
                    <li>
                        <Link href="/articulo/2">Encuesta</Link>
                    </li>
                    <li>
                        <Link href="/articulo/3">Muestras</Link>
                    </li>
                </ul>
            </nav>
            <div className="banner">
                <p className="banner-title">{pageInfo.title}</p>
                <p className="banner-subtitle">{pageInfo.subtitle}</p>
                <img src={pageInfo.img} alt="" />
            </div>
        </header>
    );
};
