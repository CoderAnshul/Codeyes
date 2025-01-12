import React, { useEffect, useState } from 'react'
import { SlArrowUp } from 'react-icons/sl';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            {isVisible && (
                <div
                    onClick={scrollToTop}
                    className="border border-black rounded-full text-3xl w-fit p-3 fixed left-7 bottom-7 z-50 cursor-pointer animate-arrow" // Add a custom hover animation
                >
                    <SlArrowUp className="transition-transform duration-300 transform" />
                </div>
            )}
        </>
    )
}
