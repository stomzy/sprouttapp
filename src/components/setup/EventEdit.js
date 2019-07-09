import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

class EventEdit extends Component {
    constructor() {
        super();
        this.state = {
          eventCode: "",
          title: "",
          description: "",
          tags: "",
          venue: "",
          type: "",
          facebook: "",
          twitter: "",
          instagram: "",
          linkedin: "",
          start_date: "",
          end_date: "",
          start_time: "",
          end_time: "",
          time_zone: "",
          website: "",
          address: "",
          postcode: "",
          state: "",
          country: "",
          company: "",
          latitude: "",
          longitude: "",
          logo: null,
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
        
        const { title, eventCode, description, venue, type, tags, facebook, twitter, instagram, linkedin,
            start_date, end_date, start_time, end_time, time_zone, website, color, longitude, latitude,
            address, postcode, state, country, company  } = this.state;
        
        let map =  `lat ${latitude} long ${longitude}`;
        
        const data = { title, tags, description, venue, type, eventCode, facebook, twitter, instagram, linkedin,
            location: {address, postcode, state, country}, map, company,
            start_date, end_date, start_time, end_time, time_zone, website, color}
        
        // console.log('datad', data)
    
    }

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
                                                        <h5>Edit Event</h5>
                                                        <span>Edit events Informations</span>
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
                                                            <a href="#!">Edit Event</a>
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
                                                                    <h5>Edit Events Information</h5>
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
                                                                            <label className="form-label">Tags</label>
                                                                            <input type="text" name="tags" placeholder="Enter Event Tags" 
                                                                            onChange={this.handleChange} value={this.state.tags} className="form-control"/>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                   
                                                                        <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Map Latitude</label>
                                                                            <input type="text" name="latitude" placeholder="Enter Event latitude" 
                                                                            onChange={this.handleChange} value={this.state.latitude} className="form-control"/>
                                                                        </div>
                                                                        </div> 
                                                                        <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Map Longitude</label>
                                                                            <input type="text" name="longitude" placeholder="Enter Event longitude" 
                                                                            onChange={this.handleChange} value={this.state.longitude} className="form-control"/>
                                                                        </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Company</label>
                                                                            <select name="company" className="form-control" onChange={this.handleChange} value={this.state.company}>
                                                                                <option value="">Select a Company
                                                                                </option>
                                            
                                                                                {/* <option value="green">Abuja</option>
                                                                                <option value="blue">Lagos</option> */}
                                                                            </select>
                                                                
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                        
                                                                    <div className="row">
                                                                        <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Facebook</label>
                                                                            <input type="text" name="facebook" placeholder="Enter your Facebook Link" 
                                                                            onChange={this.handleChange} value={this.state.facebook} className="form-control"/>
                                                                        </div>
                                                                        </div> 
                                                                        <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Twitter</label>
                                                                            <input type="text" name="twitter" placeholder="Enter Event twitter link"
                                                                             onChange={this.handleChange} value={this.state.twitter} className="form-control" />
                                                                        </div>
                                                                        </div>  
                                                                        <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Instagram</label>
                                                                            <input type="text" name="instagram" placeholder="Enter your instagram link" 
                                                                            onChange={this.handleChange} value={this.state.instagram} className="form-control" />
                                                                        </div>
                                                                        </div> 
                                                                        <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Linkedin</label>
                                                                            <input type="text" name="linkedin" placeholder="Enter Event linkedin link"
                                                                             onChange={this.handleChange} value={this.state.linkedin} className="form-control" />
                                                                        </div>
                                                                        </div>  
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Address</label>
                                                                            <input type="text" name="address" placeholder="Enter your address" 
                                                                            onChange={this.handleChange} value={this.state.location} className="form-control"/>
                                                                        </div>
                                                                        </div> 
                                                                        <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Postcode</label>
                                                                            <input type="text" name="postcode" placeholder="Enter Event postcode"
                                                                             onChange={this.handleChange} value={this.state.location} className="form-control" />
                                                                        </div>
                                                                        </div>  
                                                                        <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <label className="form-label">State</label>
                                                                            <select name="state" className="form-control" onChange={this.handleChange} value={this.state.state}>
                                                                                <option value="">Select your State
                                                                                </option>
                                                                                <option value="abuja">Abuja</option>
                                                                                <option value="lagos">Lagos</option>
                                                                            </select>
                                                                        </div>
                                                                        </div> 
                                                                        <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Country</label>
                                                                            <select name="country" className="form-control" onChange={this.handleChange} value={this.state.country}>
                                                                                <option value="">Select your country
                                                                                </option>
                                                                                <option value="nigeria">Nigeria</option>
                                                                                <option value="uk">UK</option>
                                                                            </select>
                                                                        </div>
                                                                        </div>  
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Start Date</label>
                                                                            <input type="date" name="start_date" placeholder="Enter your Start date" 
                                                                            onChange={this.handleChange} value={this.state.start_date} className="form-control"/>
                                                                        </div>
                                                                        </div> 
                                                                        <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Start Time</label>
                                                                            <input type="time" name="start_time" placeholder="Enter Event start time"
                                                                             onChange={this.handleChange} value={this.state.start_time} className="form-control" />
                                                                        </div>
                                                                        </div>  
                                                                        <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <label className="form-label">End Date</label>
                                                                            <input type="date" name="end_date" placeholder="Enter your end date" 
                                                                            onChange={this.handleChange} value={this.state.end_date} className="form-control" />
                                                                        </div>
                                                                        </div> 
                                                                        <div className="col-md-3">
                                                                        <div className="form-group">
                                                                            <label className="form-label">End Time</label>
                                                                            <input type="time" name="end_time" placeholder="Enter Event End Time"
                                                                             onChange={this.handleChange} value={this.state.end_time} className="form-control" />
                                                                        </div>
                                                                        </div>  
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Website</label>
                                                                            <input type="text" name="website" placeholder="Enter Website url" 
                                                                            onChange={this.handleChange} value={this.state.website} className="form-control"/>
                                                                        </div>
                                                                        </div>
                                                         
                                                                        <div className="col-md-6">
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
                                                                            className="form-control" numberOfLines = {8} placeholder="Event Description">
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

export default EventEdit;
