import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { connect } from 'react-redux';
import { findEvent, updateEvent } from '../../actions/eventsAction';
import { getCompanyProfiles } from '../../actions/companyProfileAction';
import {countries} from '../../common/country';

class EventEdit extends Component {
    constructor() {
        super();
        this.state = {
          eventCode: "",
          title: "",
          description: "",
          tags: [],
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
          success: null,
          location_name: "",
          location_description: "",
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        let query = {query:{"_id": id}}; 

      
        this.props.findEvent(query).then(res => {
            console.log(res.data.data[0])
            let data = res.data.data[0];
            this.setState({
                title: data.title, type: data.type, venue: data.venue, facebook: data.facebook, twitter: data.twitter, country: data.country
                ,instagram: data.instagram, linkedin: data.linkedin, website: data.website, description: data.description,tags: data.tags,company: data.company,
                latitude: data.map.slice(4, 11), longitude: data.map.slice(17, data.map.length), address: data.location.address, postcode: data.location.postcode,
                state: data.location.state, eventCode: data.eventCode, location_name: data.location.name, location_description: data.location.description
            })
        })
        .catch(err=> {
            console.log(err);
        });
        this.props.getCompanyProfiles();
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        const { title, eventCode, description, venue, type, tags, facebook, twitter, instagram, linkedin,
            start_date, end_date, start_time, end_time, time_zone, website, longitude, latitude,
            address, postcode, state, country, company  } = this.state;
        
        let map =  `lat ${latitude} long ${longitude}`;
  
        let countryName = country.slice(3, country.length)
        let tagArray = ""  
        if (Array.isArray(tags)) {
            tagArray = tags
        }else {
            tagArray = tags.split(',');
        }
         
        const data = { title, tags: tagArray, description, venue, type, eventCode, facebook, twitter, instagram, linkedin,
            location: {address, postcode, state, country: countryName, name: this.state.location_name, description: this.state.location_description}, map, company,
            start_date, end_date, start_time, end_time, time_zone, website}
        
        const { id } = this.props.match.params;
        
        let query = { 
            query: {"_id": id},
            update: data
        }

        this.props.updateEvent(query)
        .then(res => {
            this.setState({ success: `Event updated with event Code:  ${eventCode}`})
        })
        .catch(err => {
            console.log(err);
        });
    
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

        let countryArray = Object.keys(countries); 
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
                                                    <h5>Edit Event info</h5>
                                                    <span>Setting up events Informations</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="page-header-breadcrumb">
                                                <ul className=" breadcrumb breadcrumb-title">
                                                    <li className="breadcrumb-item">
                                                        <a href="#"><i className="feather icon-home"></i></a>
                                                    </li>
                                                    <li className="breadcrumb-item">
                                                        <a href="/events-list">Event List</a>
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
                                                                <h5>Edit Event Information</h5>
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
                                                                <h4 className="card-title">Event Code: {this.state.eventCode}</h4>
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Event Title</label>
                                                                        <input type="text" name="title" placeholder="Enter your Event Title" 
                                                                        onChange={this.handleChange} value={this.state.title} className="form-control" 
                                                                        required/>
                                                                    </div>
                                                                    </div> 
                                                                
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Event Type</label>
                                                                        <input type="text" name="type" placeholder="Enter Event Type" 
                                                                        onChange={this.handleChange} value={this.state.type} className="form-control"/>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                            
                                                                <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Tags</label>
                                                                        
                                                                        <input type="text" name="tags" placeholder="Enter Event Tags" 
                                                                        onChange={this.handleChange} value={this.state.tags} className="form-control" required/>
                                                                        <em style={{ color: 'blue' }}>Tags are sepereted by commas</em>
                                                                    </div>
                                                                    </div>
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
                                                                        <select name="company" className="form-control" onChange={this.handleChange} value={this.state.company} required>
                                                                                <option value="">Select a Company
                                                                                </option>
                                                                                {this.props.companyProfiles.companyProfiles.map((data, i) => <option key={i} value={data._id}>{data.name}</option> )}
                                                                            </select>
                                                            
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
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Location Name</label>
                                                                        <input type="text" name="location_name" placeholder="Enter your Location Name" 
                                                                        onChange={this.handleChange} value={this.state.location_name} className="form-control" 
                                                                        required/>
                                                                    </div>
                                                                    </div> 
                                                                
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Location Description</label>
                                                                        <input type="text" name="location_description" placeholder="Enter Location Description" 
                                                                        onChange={this.handleChange} value={this.state.location_description} className="form-control"/>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Address</label>
                                                                        <input type="text" name="address" placeholder="Enter your address" 
                                                                        onChange={this.handleChange} value={this.state.address} className="form-control"/>
                                                                    </div>
                                                                    </div> 
                                                                    <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Postcode</label>
                                                                        <input type="text" name="postcode" placeholder="Enter Event postcode"
                                                                         onChange={this.handleChange} value={this.state.postcode} className="form-control" />
                                                                    </div>
                                                                    </div>  
                                                                   
                                                                    <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Country</label>
                                                                        <select name="country" className="form-control" onChange={this.handleChange} value={this.state.country}>
                                                                            <option value="">Select your country
                                                                            </option>
                                                                            { countryArray.map((data, i) => <option key={i} value={`${data}${countries[data]}`}>{countries[data]}</option>)}
                                                                        </select>
                                                                    </div>
                                                                    </div> 
                                                                    <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">State</label>
                                                                        <input type="text" name="state" placeholder="Enter your Start date" 
                                                                        onChange={this.handleChange} value={this.state.state} className="form-control" />
                                                                    </div>
                                                                    </div> 
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Start Date</label>
                                                                        <input type="date" name="start_date" placeholder="Enter your Start date" 
                                                                        onChange={this.handleChange} value={this.state.start_date} className="form-control" required/>
                                                                    </div>
                                                                    </div> 
                                                                    <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Start Time</label>
                                                                        <input type="time" name="start_time" placeholder="Enter Event start time"
                                                                         onChange={this.handleChange} value={this.state.start_time} className="form-control" required/>
                                                                    </div>
                                                                    </div>  
                                                                    <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">End Date</label>
                                                                        <input type="date" name="end_date" placeholder="Enter your end date" 
                                                                        onChange={this.handleChange} value={this.state.end_date} className="form-control" required/>
                                                                    </div>
                                                                    </div> 
                                                                    <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">End Time</label>
                                                                        <input type="time" name="end_time" placeholder="Enter Event End Time"
                                                                         onChange={this.handleChange} value={this.state.end_time} className="form-control" required/>
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
                                                                    {/* <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Color</label>
                                                                        <select name="color" className="form-control" onChange={this.handleChange} value={this.state.color}>
                                                                            <option value="">Select your event color
                                                                            </option>
                                                                            <option value="green">Green</option>
                                                                            <option value="blue">Blue</option>
                                                                            <option value="red">Red</option>
                                                                            <option value="yellow">Yellow</option>
                                                                        </select>
                                                                    </div>
                                                                    </div>  */}
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Time Zone</label>
                                                                        <select name="time_zone" className="form-control" onChange={this.handleChange} value={this.state.time_zone} required>
                                                                            <option value="">Select your time zone
                                                                            </option>
                                                                            <option value="GMT-1">GMT-1</option>
                                                                            <option value="GMT-2">GMT-2</option>
                                                                            <option value="GMT-3">GMT-3</option>
                                                                            <option value="GMT-4">GMT-4</option>
                                                                            <option value="GMT-5">GMT-5</option>
                                                                            <option value="GMT-6">GMT-6</option>
                                                                            <option value="GMT-7">GMT-7</option>
                                                                            <option value="GMT-8">GMT-8</option>
                                                                            <option value="GMT-9">GMT-9</option>
                                                                            <option value="GMT-10">GMT-10</option>
                                                                            <option value="GMT-11">GMT-11</option>
                                                                            <option value="GMT-12">GMT-12</option>
                                                                            <option value="GMT+1">GMT+1</option>
                                                                            <option value="GMT+2">GMT+2</option>
                                                                            <option value="GMT+3">GMT+3</option>
                                                                            <option value="GMT+4">GMT+4</option>
                                                                            <option value="GMT+5">GMT+5</option>
                                                                            <option value="GMT+6">GMT+6</option>
                                                                            <option value="GMT+7">GMT+7</option>
                                                                            <option value="GMT+8">GMT+8</option>
                                                                            <option value="GMT+9">GMT+9</option>
                                                                            <option value="GMT+10">GMT+10</option>
                                                                            <option value="GMT+11">GMT+11</option>
                                                                            <option value="GMT+12">GMT+12</option>
                                                                        </select>
                                                                    </div>
                                                                    </div> 
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Description</label>
                                                                        <textarea name="description"  maxLength={500} rows="3" value={this.state.description} onChange={this.handleChange}
                                                                        className="form-control" placeholder="Event Description">
                                                                        {this.state.description}
                                                                        </textarea>
                                                                        <span>{this.state.description.length}/500</span>
                                                                    </div>
                                                                    </div> 
                                                                </div>
                                                                { notification }
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
    events: state.events,
    companyProfiles: state.companyProfiles
});

// export default Event;
export default connect(mapStateToProps, { findEvent, updateEvent, getCompanyProfiles })(EventEdit);
