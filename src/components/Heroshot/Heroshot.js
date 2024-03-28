import HeroshotHeading from "./HeroshotHeadings";
import React, { useEffect, useRef, useState } from 'react';

export default function Heroshot() {
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
                observer.unobserve(currentRef); // Cleanup
            }
        };
    }, []);


  return (
    <div id={"heroshotContainer"}>
        <div ref={domRef} className={`aboutMe-enter ${isVisible ? 'visible' : ''}`}>
        <HeroshotHeading id={'heroshotHeading1'} text={"Hi,"}/>
      <HeroshotHeading id={'heroshotHeading2'} text={"I'm Daniel"}/>
      <HeroshotHeading id={'heroshotHeading3'} text={"Software Engineer"}/>
        </div>
    </div>
  );
}
