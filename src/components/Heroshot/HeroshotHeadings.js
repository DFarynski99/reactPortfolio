import React from 'react';

export default function HeroshotHeadings({ text, id }) {
    const [isBouncing, setIsBouncing] = React.useState(false);

    const handleMouseEnter = () => {
        setIsBouncing(true); // Start the bounce animation
    };

    const handleAnimationEnd = () => {
        setIsBouncing(false); // Stop the bounce animation
    };

    // Determine className based on whether the element is bouncing
    const className = isBouncing ? 'bounce' : '';

    // Special styling for 'heroshotHeading2'
    if (id === 'heroshotHeading2') {
        const textBeforeD = text.substring(0, 4); // "I'm "
        const letterD = text.substring(4, 5); // "D"
        const textAfterD = text.substring(5); // "aniel"

        return (
            <div id={id} className={className} onMouseEnter={handleMouseEnter} onAnimationEnd={handleAnimationEnd}>
                {textBeforeD}
                <span style={{ color: '#fd3851', textShadow: '-7px 0 0 #00dfd8', fontSize: '6rem' }}>{letterD}</span>
                {textAfterD}
            </div>
        );
    }

    // For all other headings, render the text normally with bounce effect applied
    return (
        <div id={id} className={className} onMouseEnter={handleMouseEnter} onAnimationEnd={handleAnimationEnd}>
            {text}
        </div>
    );
}
