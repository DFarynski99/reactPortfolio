import hamburgerMenuImage from '../../imgs/menu-4-48.png'
import LeftPanelLiteButtons from './LeftPanelLiteButtons'

export default function LeftPanelLite({onClick}){

    const handleHamburgerMenuClick = () => {
        // Assuming 'leftPanelMoving' is a class shared by the panels you want to toggle
        var hiddenLeftPanels = document.querySelectorAll('.leftPanelMoving'); // Use '.' for class
        Array.from(hiddenLeftPanels).forEach(function(panel) {
            // Toggle the 'visible' class
            if (panel.classList.contains('visible')) {
                panel.classList.remove('visible');
            } else {
                panel.classList.add('visible');
            }
        }); // Added the missing closing parenthesis and semicolon
    }


    const handleLiteAboutClick = () => {
        const aboutContainer = document.getElementById('aboutContainer');
        if (aboutContainer) {
            // Scroll the 'container' element into view
            aboutContainer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLiteProjectsClick = () => {
        const projectsContainer = document.getElementById('projectCardContainer');
        if (projectsContainer) {
            projectsContainer.scrollIntoView({behavior: 'smooth'})
        }
    }

    const handleLiteContactClick = () => {
        const contactContainer = document.getElementById('contactSection');
        if (contactContainer) {
            contactContainer.scrollIntoView({behavior: 'smooth'})
        }
    }


    return <><div id={'leftPanelLite'}>
        <button onClick={handleHamburgerMenuClick} id={'leftPanelLiteMenuImage'}><img id='liteButtonImg' src={hamburgerMenuImage}/></button>
        </div>

        <div className={'leftPanelMoving'}>
        <LeftPanelLiteButtons divID={'liteAboutDiv'} id={'liteAboutButton'} onClick={handleLiteAboutClick} buttonType={'About'} />
        <LeftPanelLiteButtons divID={'liteProjectsDiv'} id={'liteProjectsButton'} onClick={handleLiteProjectsClick} buttonType={'Projects'} />
        <LeftPanelLiteButtons divID={'liteContactDiv'} id={'liteContactButton'} onClick={handleLiteContactClick} buttonType={'Contact'} />
        </div>
        </>

}