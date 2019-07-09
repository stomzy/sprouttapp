import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { connect } from 'react-redux';
import { createProgram } from '../../actions/programAction';

class Program extends Component {
    constructor() {
        super();
        this.state = {
          eventid: "",
          title: "",
          description: "",
          start_time: "",
          end_time: "",
          speakers: "",
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
        const { title, description, eventid, speakers, start_time,  end_time, time_zone } = this.state;
    
        const data = { title, description, eventid, speakers, start_time,  end_time, time_zone }
        
        console.log('datad', data)
        this.props.createProgram(data);
        // if (this.props.createProgram(data)) {
        //     this.setState({ title: "", description: "",  time_zone: "", speakers: "", start_time: "",  end_time: "", success: "Program Submitted Successfully"})
        // }
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
                                                    <h5>Program info</h5>
                                                    <span>Setting up Program Informations</span>
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
                                                        <a href="#!">Program info</a>
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
                                                                <h5>Create a Program</h5>
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
                                                                    <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Program Title</label>
                                                                        <input type="text" name="title" placeholder="Enter your Program Title" 
                                                                        onChange={this.handleChange} value={this.state.title} className="form-control" 
                                                                        />
                                                                    </div>
                                                                    </div> 
                                                                
                                                                    <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Event Id</label>
                                                                        <input type="text" name="eventid" placeholder="Enter Event Id" 
                                                                        onChange={this.handleChange} value={this.state.eventid} className="form-control" />
                                                                    </div>
                                                                    </div> 

                                                                    <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Speakers</label>
                                                                        <input type="text" name="speakers" placeholder="Enter Event Speakers" 
                                                                        onChange={this.handleChange} value={this.state.speakers} className="form-control" />
                                                                    </div>
                                                                    </div> 
                                                                    
                                                                </div>
                                                             
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Start Time</label>
                                                                        <input type="time" name="start_time" placeholder="Enter Event Start Time"
                                                                         onChange={this.handleChange} value={this.state.start_time} className="form-control" />
                                                                    </div>
                                                                    </div>  
                                                                    <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className="form-label">End Time</label>
                                                                        <input type="time" name="end_time" placeholder="Enter Event end Time"
                                                                         onChange={this.handleChange} value={this.state.end_time} className="form-control" />
                                                                    </div>
                                                                    </div>  
                                                                    <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Time Zone</label>
                                                                        <select name="time_zone" className="form-control" onChange={this.handleChange} value={this.state.time_zone}>
                                                                                <option value="">Select your time zone
                                                                                </option>
                                                                                <option value="GMT">GMT</option>
                                                                                <option value="LINT">LINT</option>
                                                                                <option value="TOT">TOT</option>
                                                                                <option value="CHAST">CHAST</option>
                                                                                <option value="ANAT">ANAT</option>
                                                                                <option value="SBT">SBT</option>
                                                                                <option value="LHST">LHST</option>
                                                                                <option value="AEST">AEST</option>
                                                                                <option value="ACST">ACST</option>
                                                                                <option value="JST">JST</option>
                                                                                <option value="ACWST">ACWST</option>
                                                                                <option value="CST">CST</option>
                                                                                <option value="WIB">WIB</option>
                                                                                <option value="MMT">MMT</option>
                                                                                <option value="BST">BST</option>
                                                                                <option value="NPT">NPT</option>
                                                                                <option value="IST">IST</option>
                                                                                <option value="UZT">UZT</option>
                                                                                <option value="IRDT">IRDT</option>
                                                                                <option value="GST">GST</option>
                                                                                <option value="MSK">MSK</option>
                                                                                <option value="CEST">CEST</option>
                                                                                <option value="BST">BST</option>
                                                                                <option value="CVT">CVT</option>
                                                                        </select>
                                                                    </div>
                                                                    </div> 
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Description</label>
                                                                        <textarea name="description"  maxLength={500} rows="3" value={this.state.description} onChange={this.handleChange}
                                                                        className="form-control" placeholder="Program Description">
                                                                        </textarea>
                                                                        <span>{this.state.description.length}/500</span>
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

// export default Program;

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    events: state.events,
    programs: state.programs
});

// export default Event;
export default connect(mapStateToProps, { createProgram })(Program);
