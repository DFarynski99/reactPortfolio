import TechStackComponents from "./TechStackComponents";
import { useEffect, useRef, useState } from "react";

export default function AboutMe({ sectionTitle }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
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
        observer.unobserve(currentRef); // Cleanup
      }
    };
  }, []);

  return (
    <div id={"techStackBlock"}>
      <div
        ref={domRef}
        className={`aboutMe-enter2 ${isVisible ? "visible" : ""}`}
      >
        <div id={"techStackHeading"}>Tech Stack ✍️</div>

        <div id={"techStackText"}>
          <TechStackComponents id={"HTML"} tech={"HTML"} />
          <TechStackComponents id={"CSS"} tech={"CSS"} />
          <TechStackComponents id={"JavaScript"} tech={"JavaScript"} />
          <TechStackComponents id={"React"} tech={"React"} />
          <TechStackComponents id={"Python"} tech={"Python"} />
          <TechStackComponents id={"Github"} tech={"Github"} />
          <TechStackComponents id={"SQL"} tech={"SQL"} />
          <TechStackComponents id={"Java"} tech={"Java"} />
          <TechStackComponents id={"Figma"} tech={"Figma"} />
          <TechStackComponents id={"WebScraping"} tech={"Web Scraping"} />
          <TechStackComponents id={"IFTTTWebhook"} tech={"IFTTT Webhook"} />
          <TechStackComponents id={"AWS"} tech={"AWS"} />
          <TechStackComponents
            id={"reCaptchaBypass"}
            tech={"ReCaptcha Bypass"}
          />
          <TechStackComponents id={"Flask"} tech={"Flask"} />
          <TechStackComponents id={"Selenium"} tech={"Selenium"} />
        </div>
      </div>
    </div>
  );
}
