import React, { useEffect } from 'react'
import MobileNB from './MobileNB'
import DesktopNB from './DesktopNB'
import "./nav.css";

// useEffect(() => {

// }, [window.innerWidth])

const Navigation = () => {
    let width = window.innerWidth;
    if (width < 800) {
        return <MobileNB />
    } else {
        return (
            <DesktopNB />
        );
    }
}
export default Navigation;