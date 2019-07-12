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
                            <span className="pcoded-badge label label-warning">2 items</span>
                        </a>
                        <ul className="pcoded-submenu">
                            <li className=" pcoded-hasmenu">
                                <a href="/events-list" className="waves-effect waves-dark">
                                    <span className="pcoded-mtext">Events Info</span>
                                </a>
                                {/* <ul className="pcoded-submenu">
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
                                </ul> */}
                            </li>
                            <li className=" pcoded-hasmenu">
                                <a href="/app-design-list" className="waves-effect waves-dark">
                                    <span className="pcoded-mtext">App Design</span>
                                </a>
                                {/* <ul className="pcoded-submenu">
                                    <li className="">
                                        <a href="menu-horizontal-static.html" 
                                            className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Static Layout</span>
                                        </a>
                                    </li>
                                </ul> */}
                            </li>
                        </ul>
                    </li>
                    <li className="pcoded-hasmenu">
                        <a href="#" className="waves-effect waves-dark">
                            <span className="pcoded-micon"><i className="feather icon-sidebar"></i></span>
                            <span className="pcoded-mtext">PEOPLE</span>
                            <span className="pcoded-badge label label-info">2 items</span>
                        </a>
                        <ul className="pcoded-submenu">
                            <li className=" pcoded-hasmenu">
                                <a href="/people-list" className="waves-effect waves-dark">
                                    <span className="pcoded-mtext">List People</span>
                                </a>
                                {/* <ul className="pcoded-submenu">
                                    <li className="">
                                        <a href="/events-info" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Add Attendees</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="/events-list" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">All Attendees</span>
                                        </a>
                                    </li>
                                </ul> */}
                            </li>
                        </ul>
                    </li>
                    <li className="pcoded-hasmenu">
                        <a href="#" className="waves-effect waves-dark">
                            <span className="pcoded-micon"><i className="feather icon-sidebar"></i></span>
                            <span className="pcoded-mtext">CONTENT</span>
                            <span className="pcoded-badge label label-success">6 items</span>
                        </a>
                        <ul className="pcoded-submenu">
                            <li className=" pcoded-hasmenu">
                                <a href="/floor-plan-list" className="waves-effect waves-dark">
                                    <span className="pcoded-mtext">Floor Plan</span>
                                </a>
                            </li>
                            <li className=" pcoded-hasmenu">
                                <a href="/program-list" className="waves-effect waves-dark">
                                    <span className="pcoded-mtext">Program</span>
                                </a>
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
                    <li className="pcoded-hasmenu">
                        <a href="#" className="waves-effect waves-dark">
                            <span className="pcoded-micon"><i className="feather icon-sidebar"></i></span>
                            <span className="pcoded-mtext">COMPANIES</span>
                            <span className="pcoded-badge label label-info">2 items</span>
                        </a>
                        <ul className="pcoded-submenu">
                            <li className=" pcoded-hasmenu">
                                <a href="/company" className="waves-effect waves-dark">
                                    <span className="pcoded-mtext">Add Company</span>
                                </a>
                                {/* <ul className="pcoded-submenu">
                                    <li className="">
                                        <a href="/events-info" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Add Attendees</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="/events-list" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">All Attendees</span>
                                        </a>
                                    </li>
                                </ul> */}
                            </li>
                        </ul>
                    </li>
                    <li className="pcoded-hasmenu">
                        <a href="#" className="waves-effect waves-dark">
                            <span className="pcoded-micon"><i className="feather icon-sidebar"></i></span>
                            <span className="pcoded-mtext">SETTINGS</span>
                            <span className="pcoded-badge label label-danger">2 items</span>
                        </a>
                        <ul className="pcoded-submenu">
                            <li className=" pcoded-hasmenu">
                                <a href="#" className="waves-effect waves-dark">
                                    <span className="pcoded-mtext">Profiles</span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a href="/company" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Add Profile</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="/company-profile-list" className="waves-effect waves-dark">
                                            <span className="pcoded-mtext">Company Profiles</span>
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
