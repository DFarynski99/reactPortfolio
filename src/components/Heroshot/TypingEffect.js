import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [typingSpeed, setTypingSpeed] = useState(150);

    const phrases = ["Cybersecurity Consultant", "Software Engineer"];

    useEffect(() => {
        const targetPhrase = phrases[phraseIndex];
        const timeoutId = setTimeout(() => {
            // Update the text based on adding or deleting characters
            setText(isDeleting ? targetPhrase.slice(0, charIndex - 1) : targetPhrase.slice(0, charIndex + 1));
            setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

            if (!isDeleting && charIndex === targetPhrase.length) {
                // Begin deleting after a pause at the end of typing the full phrase
                setTimeout(() => {
                    setIsDeleting(true);
                    setTypingSpeed(100); // Faster deletion speed
                }, 1000); // Delay before starting deletion
            } else if (isDeleting && charIndex === 0) {
                // After deletion completes, transition to the next phrase
                setIsDeleting(false);
                setPhraseIndex((phraseIndex + 1) % phrases.length);
                setTypingSpeed(150); // Reset typing speed
                setText(''); // Clear text immediately to prevent flicker
            }
        }, typingSpeed);

        return () => clearTimeout(timeoutId);
    }, [charIndex, isDeleting, phraseIndex, typingSpeed, phrases]);

    return (
        <div className="typing-effect">
            <span id='typingEffect'>{text}</span>
            <span id="cursor">|</span>
        </div>
    );
};

export default TypingEffect;
