import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/eventsAction';

class Event extends Component {
    constructor() {
        super();
        this.state = {
          title: "",
          description: "",
          category: "",
          venue: "",
          type: "",
          start_date: "",
          end_date: "",
          time: "",
          time_zone: "",
          website: "",
          color: "",
          logo: "",
          header_image: "",
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
        const { title, description, category, venue, type, 
            start_date, end_date, time, time_zone, website, color  } = this.state;
    
        // const token = getJwt();
    
        const data = { title, description, category, venue, type, 
            start_date, end_date, time, time_zone, website, color}
        
        // console.log('datad', data)

        this.props.createEvent(data);

        this.setState({ title: "", description: "", category: "", venue: "", time_zone: "", website: "", color: "",
              type: "", start_date: "", end_date: "", time: "", success: "Event Added Successfully"})
    
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
                                                                { notification }
                                                                <form onSubmit={this.handleSubmit}>
                                                                    <div className="card-body">
                                                                    {/* <h3 className="card-title">Create An Event</h3> */}
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Event Title</label>
                                                                            <input type="text" name="title" placeholder="Enter your Event Title" 
                                                                            onChange={this.handleChange} value={this.state.title} className="form-control" 
                                                                            />
                                                                        </div>
                                                                        </div> 
                                                                    
                                                                        <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Venue</label>
                                                                            <input type="text" name="venue" placeholder="Enter Event venue" 
                                                                            onChange={this.handleChange} value={this.state.venue} className="form-control" />
                                                                        </div>
                                                                        </div> 
                                                                        
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Event Type</label>
                                                                            <input type="text" name="type" placeholder="Enter Event Type" 
                                                                            onChange={this.handleChange} value={this.state.type} className="form-control"/>
                                                                        </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Category</label>
                                                                            <input type="text" name="category" placeholder="Enter Event category" 
                                                                            onChange={this.handleChange} value={this.state.category} className="form-control"/>
                                                                        </div>
                                                                        </div> 
                                                                    </div>
                                                                    {/* <div className="row">
                                                                        <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Event Logo</label>
                                                                            <input type="text" name="logo" placeholder="Enter Event Logo" 
                                                                            onChange={this.handleChange} value={this.state.logo} className="form-control"/>
                                                                        </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Event Header Image</label>
                                                                            <input type="text" name="header_image" placeholder="Enter Event Header Image" 
                                                                            onChange={this.handleChange} value={this.state.header_image} className="form-control"/>
                                                                        </div>
                                                                        </div> 
                                                                    </div> */}
                                                                    <div className="row">

                                                                        <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Start Date</label>
                                                                            <input type="date" name="start_date" placeholder="Enter your Event Admin" 
                                                                            onChange={this.handleChange} value={this.state.start_date} className="form-control"/>
                                                                        </div>
                                                                        </div> 
                                                                        <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label className="form-label">End Date</label>
                                                                            <input type="date" name="end_date" placeholder="Enter your Event Category" 
                                                                            onChange={this.handleChange} value={this.state.end_date} className="form-control" />
                                                                        </div>
                                                                        </div> 
                                                                        <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Time</label>
                                                                            <input type="time" name="time" placeholder="Enter Event venue"
                                                                             onChange={this.handleChange} value={this.state.time} className="form-control" />
                                                                        </div>
                                                                        </div>  
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Website</label>
                                                                            <input type="text" name="website" placeholder="Enter Website url" 
                                                                            onChange={this.handleChange} value={this.state.website} className="form-control"/>
                                                                        </div>
                                                                        </div>
                                                                        <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Color</label>
                                                                            <input type="text" name="color" placeholder="Enter Event color" 
                                                                            onChange={this.handleChange} value={this.state.color} className="form-control"/>
                                                                        </div>
                                                                        </div> 
                                                                        <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Time Zone</label>
                                                                            <input type="text" name="time_zone" placeholder="Enter Time Zone" 
                                                                            onChange={this.handleChange} value={this.state.time_zone} className="form-control"/>
                                                                        </div>
                                                                        </div> 
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Description</label>
                                                                            <textarea name="description" rows="3" value={this.state.description} onChange={this.handleChange}
                                                                            className="form-control" placeholder="Event Description">
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

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    events: state.events
});

// export default Event;
export default connect(mapStateToProps, { createEvent })(Event);