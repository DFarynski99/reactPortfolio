import githubImage from '../../imgs/github-11-32.png';
import linkedinImage from '../../imgs/linkedin-3-32.png'


export default function Socials(){


    return <div id={'socialsLeftPanel'}>

        <a href={'https://github.com/DFarynski99'}>
            <img id={'githubImageLeftPanel'} src={githubImage}/>
        </a>


        <a href={'https://www.linkedin.com/in/daniel-farynski-93a026269/'}>
            <img id={'linkedinImageLeftPanel'} src={linkedinImage}/>
        </a>


    </div>
}