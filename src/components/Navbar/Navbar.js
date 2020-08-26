import React from 'react'
import MobileNB from './MobileNB'
import DesktopNB from './DesktopNB'
import "./nav.css";

const Navigation = () => {
    let width = window.innerWidth;
    if (width < 768) {
        return <MobileNB />
    } else {
        return (
            <DesktopNB />
        );
    }
}
export default Navigation;