import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

export default class AppDesign extends Component {
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
                                                    <h5>App Design</h5>
                                                    <span>Setting up App Design</span>
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
                                                        <a href="#!">App Design</a>
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
                                                                <h5>Add App Design</h5>
                                                                <div className="card-header-right">
                                                                    <ul className="list-unstyled card-option">
                                                                        <li className="first-opt"><i
                                                                                className="feather icon-chevron-left open-card-option"></i>
                                                                        </li>
                                                                        <li><i className="feather icon-maximize full-card"></i></li>
                                                                        <li><i className="feather icon-minus minimize-card"></i>
                                                                        </li>
                                                                        <li><i className="feather icon-refresh-cw reload-card"></i>
                                                                        </li>
                                                                        <li><i className="feather icon-trash close-card"></i></li>
                                                                        <li><i
                                                                                className="feather icon-chevron-left open-card-option"></i>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                            <form >
                                                                <div className="card-body">
                                                                {/* <h3 className="card-title">Create An Event</h3> */}
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Theme</label>
                                                                        <select name="select" className="form-control">
                                                                            <option value="opt1">Select Customize Theme
                                                                            </option>
                                                                            <option value="opt2">Theme 2</option>
                                                                            <option value="opt3">Theme 3</option>
                                                                            <option value="opt4">Theme 4</option>
                                                                            {/* <option value="opt5">Type 5</option>
                                                                            <option value="opt6">Type 6</option>
                                                                            <option value="opt7">Type 7</option>
                                                                            <option value="opt8">Type 8</option> */}
                                                                        </select>
                                                                    </div>
                                                                    </div> 
                                                                
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Color</label>
                                                                        <select name="select" className="form-control">
                                                                            <option value="opt1">Select Theme color
                                                                            </option>
                                                                            <option value="opt2">Red</option>
                                                                            <option value="opt3">Green</option>
                                                                            <option value="opt4">Blue</option>
                                                                            <option value="opt5">Yellow</option>
                                                                            <option value="opt6">Brown</option>
                                                                            {/* <option value="opt7">Type 7</option>
                                                                            <option value="opt8">Type 8</option> */}
                                                                        </select>
                                                                    </div>
                                                                    </div> 
                                                                    
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Logo</label>
                                                                        <input type="file" className="form-control"/>
                                                                    </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Header Image</label>
                                                                        <input type="file" className="form-control" />
                                                                    </div>
                                                                    </div> 
                                                                </div>
                                                              
                                                                </div>
                                                                <div className="card-footer text-right">
                                                                <button type="submit" className="btn btn-primary">Submit</button>
                                                                </div>
                                                            </form>
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
