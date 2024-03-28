import ContactMethods from './ContactMethods'
import githubImage from '../../imgs/github-10-64.png';
import linkedinImage from '../../imgs/linkedin-3-64.png';
import gmailImage from '../../imgs/gmail-login-64.png';
export default function Contact(){


    return <div id={'contactSection'}>
        <div id={'contactHeading'}>Contact 📞️</div>

        <div id={'contactMethodContainer'}>

        <ContactMethods id={'contactSectionGitHub'} img={githubImage} message={'DFarynski99'} link={'https://github.com/DFarynski99'}/>
        <ContactMethods id={'contactSectionGmail'} img={gmailImage} message={'DanielFarynski99@gmail.com'} link={'DanielFarynski99@gmail.com'}/>
        <ContactMethods id={'contactSectionLinkedin'} img={linkedinImage} message={'Daniel Farynski (93a026269)'} link={'https://www.linkedin.com/in/daniel-farynski-93a026269/'}/>

        </div>
    </div>
}