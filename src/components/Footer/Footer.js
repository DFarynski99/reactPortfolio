import FooterElements from "./FooterElements";

export default function Footer() {

    const handleFooterAboutClick = () => {
        const aboutContainer = document.getElementById('aboutContainer');
        if (aboutContainer) {
            // Scroll the 'container' element into view
            aboutContainer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleFooterProjectsClick = () => {
        const projectsContainer = document.getElementById('projectCardContainer');
        if (projectsContainer) {
            projectsContainer.scrollIntoView({behavior: 'smooth'})
        }
    }

    const handleFooterContactClick = () => {
        const contactContainer = document.getElementById('contactSection');
        if (contactContainer) {
            contactContainer.scrollIntoView({behavior: 'smooth'})
        }
    }

  return (
    <div id={"footerContainer"}>
        <div id={"footer"}>
            <FooterElements 
                divID={"aboutFooter"}
                buttonID={"aboutFooterButton"}
                buttonName={"About"}
                onClick={handleFooterAboutClick} // Pass the handler function here
            />
            <FooterElements
                divID={"projectsFooter"}
                buttonID={"projectsFooterButton"}
                buttonName={"Projects"}
                onClick={handleFooterProjectsClick} // Pass the handler function here
            />
            <FooterElements
                divID={"contactFooter"}
                buttonID={"contactFooterButton"}
                buttonName={"Contact"}
                onClick={handleFooterContactClick} // Pass the handler function here

            />

            <div id={'createdBy'}>Created by me, Daniel Farynski</div>

        </div>
    </div>
  );
}
