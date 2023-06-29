import React from 'react';
import s from "./Preloader.module.css";
import preloader from "../../img/Dual Ring-1s-200px (1).gif";

function Preloader(props) {
    return (
        <>
            <div className={s.preloader}><img src={preloader} alt=""/></div>
        </>
    );
}

export default Preloader;