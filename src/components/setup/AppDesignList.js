import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { Link } from "react-router-dom";

class AppDesignList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="loader-bg">
                    <div className="loader-bar"></div>
                </div>

                <div id="pcoded" className="pcoded">
                    <div className="pcoded-overlay-box"></div>
                    <div className="pcoded-container navbar-wrapper">

                         {/* navbar */}
                            <Navbar />



                        <div className="pcoded-main-container">
                            <div className="pcoded-wrapper">

                                 {/* sidebar */}
                                    <Sidebar />
                                
                                {/* main content */}
                                <div className="pcoded-content">

                                    <div className="page-header card">
                                        <div className="row align-items-end">
                                            <div className="col-lg-8">
                                                <div className="page-header-title">
                                                    <i className="feather icon-watch bg-c-blue"></i>
                                                    <div className="d-inline">
                                                        <h5>App Design info</h5>
                                                        <span>App Design Informations</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="page-header-breadcrumb">
                                                    <ul className=" breadcrumb breadcrumb-title">
                                                        <li className="breadcrumb-item">
                                                            <a href="index.html"><i className="feather icon-home"></i></a>
                                                        </li>
                                                        <li className="breadcrumb-item">
                                                            <a href="/app-design">Add App Design</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pcoded-inner-content">
                                        <div className="main-body">
                                            <div className="page-wrapper">
                                                <div className="page-body">

                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="card">
                                                                <div className="card-header">
                                                                    <h5>Registered App Design</h5>
                                                                    <div className="card-header-right">
                                                                        <a href="/app-design">
                                                                        <button className="btn btn-primary">Add App Design</button>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="card-block">
                                                                    <div className="table-responsive">
                                                                        <table className="table table-xs table-hover table-outline card-table table-striped">
                                                                        <thead>
                                                                            <tr>
                                                                            {/* <th>S/N</th> */}
                                                                            {/* <th>Event Id</th> */}
                                                                            <th>App Name</th>
                                                                            <th>Logo Url</th>
                                                                            {/* <th>Website</th> */}
                                                                            <th>Image 1</th>
                                                                            <th>Image 2</th>
                                                                            <th>Image 3</th>
                                                                            <th></th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                      {/* display */}
                                                                        </tbody>
                                                                        </table>
                                                                    </div>
                                                                                                     
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>

                                <div id="styleSelector">
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AppDesignList;
