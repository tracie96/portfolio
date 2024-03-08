import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {


    return (
        <>
  
        <header className="rn-header haeder-default black-logo-version header--fixed header--sticky">
        <div className="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
            <div className="col-lg-2 col-6">
                <div className="header-left">
                    <div className="logo">
                        <a href="index.html">
                            {/* <img src="assets/images/logo/logo.png" alt="logo"/> */}
                        </a>
                    </div>
                </div>
            </div>

            <div className="col-lg-10 col-6">
                <div className="header-center">
                    <nav id="sideNav" className="mainmenu-nav navbar-example2 d-none d-xl-block">
                        <ul className="primary-menu nav nav-pills">
                            <li className="nav-item"><a className="nav-link smoth-animation active" href="#home">Home</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation" href="#features">About Me</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation" href="#portfolio">Portfolio</a></li>
                            <li className="nav-item"><a className="nav-link" href="https://drive.google.com/file/d/1DMIE5Xw3FkbxCF2eB21DzQYoqEgBI9Fs/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a></li>
                            <li className="nav-item"><a className="nav-link smoth-animation" href="#contacts">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="header-right">
                        <div className="hamberger-menu d-block d-xl-none">
                            <i id="menuBtn" className="feather-menu humberger-menu"></i>
                        </div>
                        <div className="close-menu d-block">
                            <span className="closeTrigger">
                            <i data-feather="x"></i>
                        </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
    </>
    )
}
