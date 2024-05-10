"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function BackToTop() {

    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        // Show the button when the user scrolls down
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Check if already scrolled
        if (window.scrollY > 100) {
            // alert("you're at the bottom of the page");
            setIsVisible(true);
        }

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return <FontAwesomeIcon onClick={scrollToTop} icon={faCircleUp} className={`${isVisible ? "opacity-1" : "opacity-0"} duration-200 ease-in border-transparent focus:border-transparent focus:ring-0 text-text bg-cardBackground p-4 fixed right-5 bottom-5 m-auto rounded-xl text-2xl border-4 border-background`} />;

}