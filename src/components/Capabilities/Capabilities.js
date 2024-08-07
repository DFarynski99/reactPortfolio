import CapabilityElement from "./CapabilityElement";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';


export default function Capabilities() {
  const webScraping = `${process.env.PUBLIC_URL}/webScrapingV4.mp4`;
  const captchaBypass = `${process.env.PUBLIC_URL}/captchaBypass.mp4`;

  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target); // Stop observing the target
            }
          });
        },
        {
          // Root margin can be adjusted as needed, e.g., "-100px" delays the trigger
          // until the target is well within the viewport. Play with this value.
          rootMargin: '-100px',
          // Threshold set to 0.1 means the callback will trigger when 10%
          // of the target is visible. Adjust based on your needs.
          threshold: 0.1
        }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Cleanup
      }
    };
  }, []);

  const navigate = useNavigate();
  const goToAbout = () => {
    navigate('/webscraping'); // This should match the path of your About route
  };

  const goToCaptchaBypass = () => {
    navigate('/captchabypass')
  }

  return (
    <div id={"capabilitiesSection"}>
      <div id={"capabilitiesHeading"}>Capabilities 💡</div>
      <div id={"combinationText"}>
        'The synergy of Cybersecurity and Software Engineering empowers endless
        innovation'
      </div>

      <div
        ref={domRef}
        className={`aboutMe-enter2 ${isVisible ? "visible" : ""}`}
      >
        <CapabilityElement
          divID={"capabilityOne"}
          capabilityTextNUMBER={"capabilityTextOne"}
          title={"Exploring the Infinite Potential of Web Scraping"}
          description={
            "The intricate art of web scraping, where digital adventurers uncover hidden gems. " +
            "Every webpage becomes a potential goldmine of information waiting to be unearthed. " +
            "From fueling innovative research endeavors to powering data-driven businesses, " +
            "discover how web scraping can be empowering to unlock new insights."
          }
          onClick={goToAbout}
          cta={"Explore →"}
          capabilityVideoNUMBER={"capabilityVideoOne"}
          src={webScraping}
        />

        <CapabilityElement
          divID={"capabilityTwo"}
          capabilityTextNUMBER={"capabilityTextTwo"}
          title={"A Dive into Captcha's Efficacy and Bypass Techniques"}
          description={
            "A commentary on Captcha's efficacy at stopping automated scripts. Uncover innovative techniques to navigate through digital barriers, this exploration sheds light on the fascinating realm of digital security and the ongoing cat-and-mouse game between bots and safeguards."
          }
          onClick={goToCaptchaBypass}
          cta={"Read More →"}
          capabilityVideoNUMBER={"capabilityVideoTwo"}
          src={captchaBypass}
        />
      </div>
    </div>
  );
}
