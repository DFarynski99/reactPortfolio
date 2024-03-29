import CapabilityElement from "./CapabilityElement";
import { useEffect, useRef, useState } from "react";

export default function Capabilities() {
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
    <div id={"capabilitiesSection"}>
      <div id={"capabilitiesHeading"}>Capabilities 💡</div>

      <div
        ref={domRef}
        className={`aboutMe-enter2 ${isVisible ? "visible" : ""}`}
      >
        <CapabilityElement
          divID={"capabilityOne"}
          capabilityTextNUMBER={"capabilityTextOne"}
          title={"Bypassing ReCaptcha v2"}
          description={"This is a placeholder text"}
          cta={"Read More ->"}
          capabilityVideoNUMBER={"capabilityVideoOne"}
          src={"/sample-5s.mp4"}
        />

        <CapabilityElement
          divID={"capabilityTwo"}
          capabilityTextNUMBER={"capabilityTextTwo"}
          title={"Bypassing Bot/Automation Detection"}
          description={"This is a placeholder text"}
          cta={"Read More ->"}
          capabilityVideoNUMBER={"capabilityVideoTwo"}
          src={"/sample-5s.mp4"}
        />
      </div>
    </div>
  );
}
