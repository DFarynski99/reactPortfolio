import React, {useEffect, useRef, useState} from 'react';
import ProjectCards from "./ProjectCards";
import LoadMoreButton from "./LoadMoreButton"

export default function Project() {
    const handleLoadMoreClick = () => {
        const projectCardContainer = document.getElementById('projectCardContainer');
        const loadMoreButton = document.getElementById('loadMoreProjectsButton')
        const cardFive = document.getElementById('cardFive');

        if (projectCardContainer) {
            projectCardContainer.style.height = '170vh';
            loadMoreButton.style.display = 'none'
            cardFive.style.display = 'block'
        }
    };


    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Stop observing the target after it becomes visible
                }
            });
        });

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

  return (
      <div ref={domRef} className={`aboutMe-enter3 ${isVisible ? 'visible' : ''}`}>
      <div id={"projectCardContainer"}>
      <div id={'projectsContainerHeading'}>Projects 🗂️</div>
      <div id={"cardSection"}>
        <ProjectCards
          className={"projectCard"}
          id={"cardOne"}
          youtubeEmbedLink={
            "https://www.youtube.com/embed/StUdeoHHhUY?si=nuXz5EsHHjumiM41"
          }
          projectTitle={"AIO Airline Scraper"}
          projectDescription={"Created a scraper to find prices more efficiently than going on 4 airline websites. Utilises 2Captcha and various web app security bypasses to avoid bot-detection."}
          projectGitHub={
            "https://github.com/DFarynski99/fullstackAirlineWebsite"
          }
          projectWebsite={"Local Host Only"}
          websiteStatus={'Local Host Only'}
        />

        <ProjectCards
          className={"projectCard"}
          id={"cardTwo"}
          youtubeEmbedLink={
            "https://www.youtube.com/embed/NvJT4owqLro?si=ZKEv4Wgum99-_uXd"
          }
          projectTitle={"Valentine's Website"}
          projectDescription={"This website offers an interactive Valentine's Day experience. It features a straightforward, engaging interface where users are prompted to click to reveal a special message."}
          projectGitHub={
            "https://github.com/DFarynski99/valentinesDay2024"
          }
          projectWebsite={"https://danielvalentinesday.com/"}
          websiteStatus={'Website'}
        />

        <ProjectCards
          className={"projectCard"}
          id={"cardThree"}
          youtubeEmbedLink={
            "https://www.youtube.com/embed/-Wa6pOK5CIU?vq=hd1080"
          }
          projectTitle={"SkyScanner Scraper"}
          projectDescription={"Monitors SkyScanner for flights that meet criteria. Upon detecting a price below a threshold, an IFTTT webhook immediately sends email."}
          projectGitHub={
            "https://github.com/DFarynski99/skyScannerScraper"
          }
          projectWebsite={"Local Host Only"}
          websiteStatus={'Local Host Only'}
        />

        <ProjectCards
          className={"projectCard"}
          id={"cardFour"}
          youtubeEmbedLink={
            "https://www.youtube.com/embed/GytY4-Tqk5Y?si=ySU7tsWhJIL_2SRJ"
          }
          projectTitle={"Genius Website Clone"}
          projectDescription={"Programmed a responsive web-design accurately of Genius.com's layout, closely replicating the user experience of the original Genius.com platform."}
          projectGitHub={
            "https://github.com/DFarynski99/GeniusWebsiteClone"
          }
          projectWebsite={"https://danielgeniusclone.com/"}
          websiteStatus={'Website'}
        />


        <ProjectCards
          className={"projectCard"}
          id={"cardFive"}
          youtubeEmbedLink={
              "https://www.youtube.com/embed/cHtCQ5ZlC98?si=Hd5MjduYuQMCFCVK"
          }
          projectTitle={"Boost Account Scraper"}
          projectDescription={"Developed a Python bot to automate logging in and notify of how many ‘Vibe Points' a user has. Utilises an API call to 2Captcha to solve ReCaptcha v2 during login process."}
          projectGitHub={
              "https://github.com/DFarynski99/fullstackAirlineWebsite"
          }
          projectWebsite={"Local Host Only"}
          websiteStatus={'Local Host Only'}
        />

          <LoadMoreButton onClick={handleLoadMoreClick} />

      </div>
      </div>


    </div>
  );
}
