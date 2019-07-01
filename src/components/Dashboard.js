import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

class Dashboard extends Component {

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

                                <div className="pcoded-content">

                                    <div className="page-header card">
                                        <div className="row align-items-end">
                                            <div className="col-lg-8">
                                                <div className="page-header-title">
                                                    <i className="feather icon-home bg-c-blue"></i>
                                                    <div className="d-inline">
                                                        <h5>Dashboard</h5>
                                                        <span>Welcome to sprout conference app.</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="page-header-breadcrumb">
                                                    <ul className=" breadcrumb breadcrumb-title">
                                                        <li className="breadcrumb-item">
                                                            <a href="index.html"><i className="feather icon-home"></i></a>
                                                        </li>
                                                        <li className="breadcrumb-item"><a href="#!">Dashboard</a> </li>
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

                                                        <div className="col-md-12 col-xl-8">
                                                            <div className="card sale-card">
                                                                <div className="card-header">
                                                                    <h5>Deals Analytics</h5>
                                                                </div>
                                                                <div className="card-block">
                                                                    <div id="sales-analyticss" className="chart-shadow"
                                                                        style={{height:"380px"}}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 col-xl-4">
                                                            <div className="card comp-card">
                                                                <div className="card-body">
                                                                    <div className="row align-items-center">
                                                                        <div className="col">
                                                                            <h6 className="m-b-25">Impressions</h6>
                                                                            <h3 className="f-w-700 text-c-blue">1,563</h3>
                                                                            <p className="m-b-0">May 23 - June 01 (2017)</p>
                                                                        </div>
                                                                        <div className="col-auto">
                                                                            <i className="fas fa-eye bg-c-blue"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card comp-card">
                                                                <div className="card-body">
                                                                    <div className="row align-items-center">
                                                                        <div className="col">
                                                                            <h6 className="m-b-25">Goal</h6>
                                                                            <h3 className="f-w-700 text-c-green">30,564</h3>
                                                                            <p className="m-b-0">May 23 - June 01 (2017)</p>
                                                                        </div>
                                                                        <div className="col-auto">
                                                                            <i className="fas fa-bullseye bg-c-green"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card comp-card">
                                                                <div className="card-body">
                                                                    <div className="row align-items-center">
                                                                        <div className="col">
                                                                            <h6 className="m-b-25">Impact</h6>
                                                                            <h3 className="f-w-700 text-c-yellow">42.6%</h3>
                                                                            <p className="m-b-0">May 23 - June 01 (2017)</p>
                                                                        </div>
                                                                        <div className="col-auto">
                                                                            <i className="fas fa-hand-paper bg-c-yellow"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="col-xl-12">
                                                            <div className="card proj-progress-card">
                                                                <div className="card-block">
                                                                    <div className="row">
                                                                        <div className="col-xl-3 col-md-6">
                                                                            <h6>Published Project</h6>
                                                                            <h5 className="m-b-30 f-w-700">532<span
                                                                                    className="text-c-green m-l-10">+1.69%</span></h5>
                                                                            <div className="progress">
                                                                                <div className="progress-bar bg-c-red"
                                                                                    style={{width:"25%"}}></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xl-3 col-md-6">
                                                                            <h6>Completed Task</h6>
                                                                            <h5 className="m-b-30 f-w-700">4,569<span
                                                                                    className="text-c-red m-l-10">-0.5%</span></h5>
                                                                            <div className="progress">
                                                                                <div className="progress-bar bg-c-blue"
                                                                                    style={{width:"65%"}}></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xl-3 col-md-6">
                                                                            <h6>Successfull Task</h6>
                                                                            <h5 className="m-b-30 f-w-700">89%<span
                                                                                    className="text-c-green m-l-10">+0.99%</span></h5>
                                                                            <div className="progress">
                                                                                <div className="progress-bar bg-c-green"
                                                                                    style={{width:"85%"}}></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xl-3 col-md-6">
                                                                            <h6>Ongoing Project</h6>
                                                                            <h5 className="m-b-30 f-w-700">365<span
                                                                                    className="text-c-green m-l-10">+0.35%</span></h5>
                                                                            <div className="progress">
                                                                                <div className="progress-bar bg-c-yellow"
                                                                                    style={{width:"45%"}}></div>
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

export default Dashboard;
