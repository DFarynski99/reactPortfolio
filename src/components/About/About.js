import AboutMe from './AboutMe'
import TechStack from './TechStack'
import {useEffect, useRef, useState} from "react";

export default function App(){
    return <div id={"aboutContainer"}>

        <AboutMe sectionTitle={'About Me 👋'}/>

        <TechStack/>
        
        <svg id={'line'} width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
            <path d="M600,2 Q600,110 500,110 T400,285" stroke="grey" fill="none" stroke-width="2"/>
        </svg>


    </div>
}