import React from "react";
import themeOn from '../../assets/images/themeOn.svg'
import themeOff from '../../assets/images/themeOff.svg'
import { Icono } from "../UI";

const Tema = ({tema}) => {
    const claro = <Icono src={themeOn} />
    const oscuro = <Icono src={themeOff} />

    return <>{tema ? oscuro : claro}</>
}

export default Tema