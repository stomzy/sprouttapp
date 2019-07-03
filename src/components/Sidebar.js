import React from 'react'

export default function Sidebar() {
    return (
        <nav className="pcoded-navbar">
        <div className="nav-list">
            <div className="pcoded-inner-navbar main-menu">
                <div className="pcoded-navigation-label">MENU NAVIGATION</div>
                <ul className="pcoded-item pcoded-left-item">
                    <li className="pcoded-hasmenu active pcoded-trigger">
                        <a href="/dashboard" className="waves-effect waves-dark">
                            <span className="pcoded-micon"><i className="feather icon-home"></i></span>
                            <span className="pcoded-mtext">DASHBOARD</span>
                        </a>
                    </li>
                    <li className="pcoded-hasmenu">
                        <a href="#" className="waves-effect waves-dark">
                            <span className="pcoded-micon"><i className="feather icon-sidebar"></i></span>
                            <span className="pcoded-mtext">SETUP</span>
                            <span className="pcoded-badge label label-warning">2 sub-menus</span>
                        </a>
                        <ul className="pcoded-submenu">
                            <li className=" pcoded-hasmenu">
                                <a href="#" className="waves-effect waves-dark">
                                    <span className="pcoded-mtext">Events Info</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a href="/events-info" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Add Events</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="/events-list" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">All Events</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" pcoded-hasmenu">
                                <a href="/app-design" className="waves-effect waves-dark">
                                    <span className="pcoded-mtext">App Design</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a href="menu-horizontal-static.html" 
                                            className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Static Layout</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="pcoded-hasmenu">
                        <a href="#" className="waves-effect waves-dark">
                            <span className="pcoded-micon"><i className="feather icon-sidebar"></i></span>
                            <span className="pcoded-mtext">CONTENT</span>
                            <span className="pcoded-badge label label-success">4 sub-menus</span>
                        </a>
                        <ul className="pcoded-submenu">
                            <li className=" pcoded-hasmenu">
                                <a href="#" className="waves-effect waves-dark">
                                    <span className="pcoded-mtext">Speaker</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a href="" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Static Layout</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" pcoded-hasmenu">
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
                                    <span className="pcoded-mtext">Program</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a href="/program" 
                                            className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Create a Program</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="/program-list" 
                                            className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Program List</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" pcoded-hasmenu">
                                <a href="#" className="waves-effect waves-dark">
                                    <span className="pcoded-mtext">Resources</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a href="/resource" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Add Resource</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="/resources-list" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Resources List</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" pcoded-hasmenu">
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
                                    <span className="pcoded-mtext">Activities</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a href="/activities" 
                                            className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Create an activity</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="/activities-list" 
                                            className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Activity List</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" pcoded-hasmenu">
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
                                    <span className="pcoded-mtext">User/Post</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a href="" 
                                            className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Static Layout</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
