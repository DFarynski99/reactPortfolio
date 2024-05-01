import React, { useEffect, useRef, useState } from "react";
import "../../App.css"; // Assuming your CSS is defined here

export default function AboutMe({ sectionTitle }) {
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
          // of the target is visible
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

  return (
    <div ref={domRef} className={`aboutMe-enter ${isVisible ? "visible" : ""}`}>
      <div id={"aboutMeBlock"}>
        <div id="aboutMeHeading">{sectionTitle}</div>
        <div id="aboutMeText">
          Daniel Farynski is a highly skilled cybersecurity consultant who works 
          at SALTT Technologies. He is a student of Computer Science with a dual 
          major in Cybersecurity and Software Engineering at the University of Wollongong. 
          Daniel’s expertise lies in various aspects of cybersecurity, with a strong
          focus on application and API security and the secure software development lifecycle.
          <br />
          <br />
          Daniel's commitment to cybersecurity is not just a profession; it's a deep-rooted passion. 
          His focus on application and API security and the secure software development lifecycle is 
          driven by his love for software development, particularly in the context of cybersecurity. 
          His technical prowess is balanced by a strong commitment to crafting responsible defence and 
          mitigation strategies and assisting other developers in building secure applications.
        </div>
      </div>
    </div>
  );
}
