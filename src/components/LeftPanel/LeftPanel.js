import LeftPanelButtons from './LeftPanelButtons'
import LetterD from './LetterD'
import Socials from './Socials'
export default function LeftPanel(){

    const handleLeftPanelAboutClick = () => {
        const aboutContainer = document.getElementById('aboutContainer');
        if (aboutContainer) {
            // Scroll the 'container' element into view
            aboutContainer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLeftPanelProjectsClick = () => {
        const projectsContainer = document.getElementById('projectCardContainer');
        if (projectsContainer) {
            projectsContainer.scrollIntoView({behavior: 'smooth'})
        }
    }

    const handleLeftPanelContactClick = () => {
        const contactContainer = document.getElementById('contactSection');
        if (contactContainer) {
            contactContainer.scrollIntoView({behavior: 'smooth'})
        }
    }

    return <div id={"leftPanel"}>


        <LetterD />

        <div id={'leftPanelButtonCSS'}> 
        <LeftPanelButtons divID={'leftPanelAboutDiv'} buttonID={'leftPanelAboutButton'} text={'About'} onClick={handleLeftPanelAboutClick}/>
        <LeftPanelButtons divID={'leftPanelProjectDiv'} buttonID={'leftPanelProjectButton'} text={'Projects'} onClick={handleLeftPanelProjectsClick}/>
        <LeftPanelButtons divID={'leftPanelContactDiv'} buttonID={'leftPanelContactButton'} text={'Contact'} onClick={handleLeftPanelContactClick}/>
        </div>

        <Socials />


    </div>
}