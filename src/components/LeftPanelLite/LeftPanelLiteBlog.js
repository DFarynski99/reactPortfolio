import hamburgerMenuImage from '../../imgs/menu-4-48.png'
import LeftPanelLiteButtons from './LeftPanelLiteButtons'
import { useNavigate } from "react-router-dom";


export default function LeftPanelLiteBlog(){


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

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/", { state: { scrollToCapabilities: true } });
    };


    return <><div id={'leftPanelLite'}>
        <button onClick={handleHamburgerMenuClick} id={'leftPanelLiteMenuImage'}><img id='liteButtonImg' src={hamburgerMenuImage}/></button>
    </div>

        <div className={'leftPanelMoving'}>
            <LeftPanelLiteButtons divID={'liteHomeDiv'} id={'liteHomeButton'} onClick={goToHome} buttonType={'Back To Home'} />
        </div>
    </>
}