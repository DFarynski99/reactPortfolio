import React, { useEffect, useRef, useState } from "react";
import "../../App.css"; // Assuming your CSS is defined here

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
    <div ref={domRef} className={`aboutMe-enter ${isVisible ? "visible" : ""}`}>
      <div id={"aboutMeBlock"}>
        <div id="aboutMeHeading">{sectionTitle}</div>
        <div id="aboutMeText">
          I am a third-year Computer Science student at the University of
          Wollongong, majoring in Software Engineering and Cybersecurity. I work
          as a Cybersecurity Consultant at SALTT Technologies, defending our
          digital future and striving to create safer digital societies for
          everyone.
          <br />
          <br />
          In my spare time, I enjoy developing a suite of personal projects,
          which are available on my GitHub. Each project has tangible,
          real-world applications and covers a wide range of technologies. My
          work showcases a combination of Software Engineering skills—such as
          creating web applications and front-end pages—and Cybersecurity
          expertise, including bypassing security measures like reCAPTCHA, rate
          limiting, and automation detection.
        </div>
      </div>
    </div>
  );
}
