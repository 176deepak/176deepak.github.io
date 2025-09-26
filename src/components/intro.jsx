import { useEffect, useState, useRef } from "react";

function IntroSection() {
    const words = ["AI Engineer", "AI Student"];
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const charIndex = useRef(0); // persist character index

    useEffect(() => {
        let timeout;

        const type = () => {
        const currentWord = words[wordIndex];

        if (!isDeleting) {
            setText(currentWord.slice(0, charIndex.current + 1));
            charIndex.current += 1;

            if (charIndex.current === currentWord.length) {
            timeout = setTimeout(() => setIsDeleting(true), 1000);
            return;
            }
        } else {
            setText(currentWord.slice(0, charIndex.current - 1));
            charIndex.current -= 1;

            if (charIndex.current === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
            return;
            }
        }

        timeout = setTimeout(type, isDeleting ? 50 : 150);
        };

        timeout = setTimeout(type, 150);

        return () => clearTimeout(timeout);
    }, [wordIndex, isDeleting]);

    return (
        <section id="intro-section" className="pb-20">
        <div
            id="intro-container"
            className="bg-[url(intro-bg.jpg)] bg-cover bg-center w-full h-screen flex flex-col items-center justify-center"
        >
            <div id="intro" className="text-center">
            {/* Static headline */}
            <h1 className="intro-line text-[2.5rem] md:text-[4rem] font-serif">
                Hello! This is Deepak Saini
            </h1>

            {/* Typewriter dynamic headline */}
            <h3 className="text tagline text-[1.5rem] mt-4">
                {text}
                <span className="blinking-cursor">|</span>
            </h3>
            </div>
        </div>
        </section>
    );
}

export default IntroSection;
