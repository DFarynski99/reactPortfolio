import hamburgerMenuImage from '../../imgs/menu-4-48.png'
import LeftPanelLiteButtons from './LeftPanelLiteButtons'

export default function LeftPanelLite({onClick}){

    const handleHamburgerMenuClick = () => {
        const leftPanelLite = document.getElementById('leftPanelLite');
        if (leftPanelLite) {
            // Check the current width and toggle between 10% and 80%
            leftPanelLite.style.width = leftPanelLite.style.width === '80%' ? '10%' : '80%';
        }
    };

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


    return <div id={'leftPanelLite'}>
        <button onClick={handleHamburgerMenuClick} id={'leftPanelLiteMenuImage'}><img src={hamburgerMenuImage}/></button>

        <LeftPanelLiteButtons id={'liteAboutButton'} onClick={handleLiteAboutClick} buttonType={'About'} />
        <LeftPanelLiteButtons id={'liteProjectsButton'} onClick={handleLiteProjectsClick} buttonType={'Projects'} />
        <LeftPanelLiteButtons id={'liteContactButton'} onClick={handleLiteContactClick} buttonType={'Contact'} />

    </div>
}