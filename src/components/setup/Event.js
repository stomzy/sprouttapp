import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

export default class Event extends Component {
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
                                                        <h5>Event info</h5>
                                                        <span>Setting up events Informations</span>
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
                                                            <a href="#!">Event info</a>
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
                                                                    <h5>Add Events Information</h5>
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
                                                                            <label className="form-label">Event Title</label>
                                                                            <input type="text" name="title" placeholder="Enter your Event Title" 
                                                                            className="form-control" 
                                                                            />
                                                                        </div>
                                                                        </div> 
                                                                    
                                                                        <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Venue</label>
                                                                            <input type="text" name="venue" placeholder="Enter Event venue" 
                                                                            className="form-control" />
                                                                        </div>
                                                                        </div> 
                                                                        
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Event Type</label>
                                                                            <input type="text" name="type" placeholder="Enter Event Type" 
                                                                            className="form-control"/>
                                                                        </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Category</label>
                                                                            <input type="text" name="category" placeholder="Enter Event category" 
                                                                            className="form-control"/>
                                                                        </div>
                                                                        </div> 
                                                                    </div>
                                                                    <div className="row">

                                                                        <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Start Date</label>
                                                                            <input type="date" name="start_date" placeholder="Enter your Event Admin" 
                                                                            className="form-control"/>
                                                                        </div>
                                                                        </div> 
                                                                        <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label className="form-label">End Date</label>
                                                                            <input type="date" name="end_date" placeholder="Enter your Event Category" 
                                                                            className="form-control" />
                                                                        </div>
                                                                        </div> 
                                                                        <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Time</label>
                                                                            <input type="time" name="time" placeholder="Enter Event venue"
                                                                            className="form-control" />
                                                                        </div>
                                                                        </div>  
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Description</label>
                                                                            <textarea name="description" rows="3" className="form-control" placeholder="Event Description">
                                                                            </textarea>
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
