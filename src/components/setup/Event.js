import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/eventsAction';
import { getCompanyProfiles } from '../../actions/companyProfileAction';

class Event extends Component {
    constructor() {
        super();
        this.state = {
        //   eventCode: null,
          title: "",
          description: "",
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
        //   color: "",
          address: "",
          postcode: "",
          state: "",
          country: "",
          company: "",
          latitude: "",
          longitude: "",
          logo: null,
        //   header_image: null,
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
        
        const { title, description, venue, type, tags, facebook, twitter, instagram, linkedin,
            start_date, end_date, start_time, end_time, time_zone, website, color, longitude, latitude,
            address, postcode, state, country, company  } = this.state;
        
        let map =  `lat ${latitude} long ${longitude}`;
        let rand =  Math.floor(100000 + Math.random() * 900000);
        let eventCode = title.slice(0, 5) + rand;
        
        const data = { title, tags, description, venue, type, eventCode, facebook, twitter, instagram, linkedin,
            location: {address, postcode, state, country}, map, company,
            start_date, end_date, start_time, end_time, time_zone, website, color}
        
        console.log('datad', data)

        // this.props.createEvent(data)
        
        this.setState({ title: "", tags: "", description: "",  venue: "", time_zone: "", website: "",
        type: "", facebook: "", twitter: "", instagram: "", linkedin: "", start_date: "", end_date: "", time: "", 
        longitude: "", latitude: "", address: "", postcode: "", state: "", country: "", company: "", success: `Event created with event Code:  ${eventCode}`})
       
    
    }

    fileChangedHandler = event => {
        const file = event.target.files[0];
        this.setState({ logo: file });
    }

    // imageChangedHandler = event => {
    //     const file = event.target.files[0];
    //     this.setState({ header_image: file });
    // }

    componentDidMount() {
        this.props.getCompanyProfiles();
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
                                                                        {/* <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Category</label>
                                                                            <input type="text" name="category" placeholder="Enter Event category" 
                                                                            onChange={this.handleChange} value={this.state.category} className="form-control"/>
                                                                        </div>
                                                                        </div>  */}
                                                                        <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Tags</label>
                                                                            <input type="text" name="tags" placeholder="Enter Event Tags" 
                                                                            onChange={this.handleChange} value={this.state.tags} className="form-control"/>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        {/* <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Event Code</label>
                                                                            <input type="text" name="eventCode" placeholder="Enter Event Code" 
                                                                            onChange={this.handleChange} value={this.state.eventCode} className="form-control"/>
                                                                        </div>
                                                                        </div> */}
                                                                        <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Map Latitude</label>
                                                                            <input type="text" name="latitude" placeholder="Enter Event latitude" 
                                                                            onChange={this.handleChange} value={this.state.latitude} className="form-control"/>
                                                                        </div>
                                                                        </div> 
                                                                        <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Map Longitude</label>
                                                                            <input type="text" name="longitude" placeholder="Enter Event longitude" 
                                                                            onChange={this.handleChange} value={this.state.longitude} className="form-control"/>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Event Logo</label>
                                                                            <input type="file" className="form-control" onChange={this.fileChangedHandler}/>
                                                                        </div>
                                                                        </div>
                                                                        {/* <div className="col-md-4">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Event Header Image</label>
                                                                            <input type="file" className="form-control" onChange={this.imageChangedHandler}/>
                                                                        </div>
                                                                        </div>  */}
                                                                        <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label className="form-label">Company</label>
                                                                            <select name="company" className="form-control" onChange={this.handleChange} value={this.state.company}>
                                                                                <option value="">Select a Company
                                                                                </option>
                                                                                {this.props.companyProfiles.companyProfiles.map((data, i) => <option key={i} value={data._id}>{data.company_name}</option> )}
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
                                                                            {/* <input type="text" name="time_zone" placeholder="Enter Time Zone" 
                                                                            onChange={this.handleChange} value={this.state.time_zone} className="form-control"/> */}
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
    events: state.events,
    companyProfiles: state.companyProfiles
});

// export default Event;
export default connect(mapStateToProps, { createEvent, getCompanyProfiles })(Event);