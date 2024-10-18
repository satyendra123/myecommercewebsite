import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosWrapper = ({ children, animationType = 'fade-up', offset = 100, duration = 800, delay = 100 }) => {
    useEffect(() => {
        AOS.init({
            offset: offset,
            duration: duration,
            easing: "ease-in-sine",
            delay: delay,
        });
        AOS.refresh();
    }, [offset, duration, delay]);

    return (
        <div data-aos={animationType} data-aos-delay={delay}>
            {children}
        </div>
    );
};

export default AosWrapper;
