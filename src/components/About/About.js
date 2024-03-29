import AboutMe from './AboutMe'
import TechStack from './TechStack'
import {useEffect, useRef, useState} from "react";

export default function App(){
    return <div id={"aboutContainer"}>

        <AboutMe sectionTitle={'About Me 👋'}/>

        <TechStack/>
        


    </div>
}