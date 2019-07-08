import React, { Component } from 'react';
import Sidebar from '../../Sidebar';
import Navbar from '../../Navbar';
import { connect } from 'react-redux';
import { createActivity } from '../../../actions/activityAction';

class Activities extends Component {
    constructor() {
        super();
        this.state = {
          eventid: "",
          content: "",
          picture: "",
          video: "",
          time: "",
          time_zone: "",
          success: null
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { content, picture, video, eventid, time, time_zone } = this.state;
    
        const data = { content, picture, video, eventid, time, time_zone }
        
        console.log('datad', data)

        this.props.createActivity(data);

        this.setState({ content: "",  time_zone: "", time: "", success: "Activity Created Successfully"})
    
    }
    
    render() {
        let notification = "";
        if (this.state.success != null) {
            notification = (
                <div className="alert alert-success" role="alert">
                    { this.state.success }
                </div>
            );
        }

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
                                                    <h5>Activities info</h5>
                                                    <span>Setting up Activity</span>
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
                                                        <a href="#!">Activities info</a>
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
                                                                <h5>Create an Activity</h5>
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
                                                            { notification }
                                                            <form onSubmit={this.handleSubmit}>
                                                                <div className="card-body">
                                                                {/* <h3 className="card-title">Create An Event</h3> */}
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Content</label>
                                                                        <input type="text" name="content" placeholder="Enter your activity content" 
                                                                        onChange={this.handleChange} value={this.state.content} className="form-control" 
                                                                        />
                                                                    </div>
                                                                    </div> 
                                                                
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Event Id</label>
                                                                        <input type="text" name="eventid" placeholder="Enter Event Id" 
                                                                        onChange={this.handleChange} value={this.state.eventid} className="form-control" />
                                                                    </div>
                                                                    </div> 
                                                                    
                                                                </div>
                                                             
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Time</label>
                                                                        <input type="time" name="time" placeholder="Enter Event Time"
                                                                         onChange={this.handleChange} value={this.state.time} className="form-control" />
                                                                    </div>
                                                                    </div>  
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Time Zone</label>
                                                                        <select name="time_zone" className="form-control" onChange={this.handleChange} value={this.state.time_zone}>
                                                                            <option value="">Select your time zone
                                                                            </option>
                                                                            <option value="GMT">GMT</option>
                                                                            <option value="GMT+1">GMT + 1</option>
                                                                            <option value="GMT+2">GMT + 2</option>
                                                                        </select>
                                                                    </div>
                                                                    </div> 
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">picture</label>
                                                                        <input type="file" className="form-control"/>
                                                                    </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Video</label>
                                                                        <input type="file" className="form-control" />
                                                                    </div>
                                                                    </div> 
                                                                </div>
                                                                {/* <div className="row">
                                                                    <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Description</label>
                                                                        <textarea name="description" rows="3" value={this.state.description} onChange={this.handleChange}
                                                                        className="form-control" placeholder="Program Description">
                                                                        </textarea>
                                                                    </div>
                                                                    </div> 
                                                                </div> */}

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

// export default Program;

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    events: state.events,
    programs: state.programs
});

// export default Event;
export default connect(mapStateToProps, { createActivity })(Activities);

