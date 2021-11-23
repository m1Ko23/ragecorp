import React from 'react';
import { useRecoilState } from 'recoil'
import { collapsedState } from '../../utils/recoil-atoms'
import {Link} from 'gatsby'
import logo from "../../assets/images/logo.png"

const Navbar = () => {
    const [collapsed, setCollapsed] = useRecoilState(collapsedState);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <div id="navbar" className="navbar-area">
                <div className="tarn-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link 
                                to="/"
                                onClick={() => setCollapsed(true)} 
                                className="navbar-brand"
                            >
                                <img src={logo} alt="logo" />
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link 
                                            to="/" 
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()} 
                                            className="nav-link"
                                        >
                                            Главная
                                        </Link>

                                        {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link 
                                                    to="/" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    IT Services
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/seo-agency" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    SEO Agency
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/data-science-ml-company" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Data Science ML Company
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/data-analytics-ai-startup" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Data Analytics & AI Startup
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/digital-marketing-agency" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Digital Marketing Agency
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/data-science-online-courses" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Data Science Online Courses
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/big-data-analysis-startup" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Big Data Analysis Startup
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/data-analytics-ml-consulting" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Data Analytics ML Consulting
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/machine-learning-ai-solutions" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Machine Learning AI Solutions
                                                </Link>
                                            </li>
                                        </ul> */}
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="#" 
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            О Компании
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="#" 
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Services
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="#" 
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Case Studies
                                                
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="#" 
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Pages 
                                        </Link>

                                        {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link 
                                                    to="#" 
                                                    activeClassName="active"
                                                    onClick={e => e.preventDefault()}
                                                    className="nav-link"
                                                >
                                                    Courses <i className='bx bx-chevron-down'></i>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link 
                                                            to="/courses" 
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Courses
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link 
                                                            to="/course-details" 
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Course Details
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="#" 
                                                    activeClassName="active"
                                                    onClick={e => e.preventDefault()}
                                                    className="nav-link"
                                                >
                                                    Events <i className='bx bx-chevron-down'></i>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link 
                                                            to="/events" 
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Events
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link 
                                                            to="/event-details" 
                                                            activeClassName="active"
                                                            onClick={() => setCollapsed(true)}
                                                            className="nav-link"
                                                        >
                                                            Event Details
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link 
                                                    to="/contact" 
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Contact
                                                </Link>
                                            </li>
                                        </ul> */}
                                    </li>

                                    <li className="nav-item">
                                        <Link 
                                            to="#" 
                                            activeClassName="active"
                                            onClick={e => e.preventDefault()}
                                            className="nav-link"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Navbar;
