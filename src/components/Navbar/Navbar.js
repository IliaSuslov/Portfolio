import React, { useState, useEffect } from 'react'
import MobileNB from './MobileNB'
import DesktopNB from './DesktopNB'
import "./nav.css";

const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return { width };
}

const Navigation = () => {

    const { width } = useViewport();
    const breakpoint = 1100;

    return width < breakpoint ? <MobileNB /> : <DesktopNB />;
}
export default Navigation;