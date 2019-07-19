import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import {countries} from '../../common/country';
import { connect } from 'react-redux';
import { getPeople, findPeople, updatePeople } from '../../actions/peopleAction';
import axios from 'axios';
import { headers } from '../../utils/headerJWT';
import { url } from '../../config/config';

class EditPeople extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            name: "",
            phone: "",
            address: "",
            title: "",
            short_bio: "",
            job_title: "",
            website: "",
            country: "",
            photo: "",
            interest: "",
            company_name: "",
            facebook: "",
            facebook_visible: false,
            twitter: "",
            twitter_visible: false,
            linkedin: "",
            linkedin_visible: false,
            instagram: "",
            instagram_visible: false,
            role: "",
            success: null,
            photoUrl: "",
            photourl: ""
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        let query = {query:{"_id": id}}; 
        this.props.findPeople(query);
        this.props.getPeople()
    }

    componentWillReceiveProps(NextProps) {
      
        let data = NextProps.peopleProfile.people;
 
        this.setState({
            email: data.email, name: data.name, phone: data.phone, address: data.address, interest: data.interest, company_name: data.company_name,
            short_bio: data.short_bio, website: data.website, facebook: data.facebook, twitter: data.twitter, country: data.country,
            linkedin: data.linkedin, instagram: data.instagram, facebook_visible: data.facebook_visible, twitter_visible: data.twitter_visible,
            linkedin_visible: data.linkedin_visible, instagram_visible: data.instagram_visible, job_title: data.job_title, photoUrl: data.photo
        })
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    fileChangedHandler = event => {
        let self = this;
        let reader = new FileReader();
        const file = event.target.files[0];
        
        reader.onload = function(upload) {
            self.setState({ photo: upload.target.result });
        };

        reader.readAsDataURL(file); 
    }

    handleSubmit(e) {
        e.preventDefault();
        let { photo, interest, email, company_name, name, phone, address, job_title, short_bio, website, country, facebook, facebook_visible,
            twitter, twitter_visible, linkedin, linkedin_visible, instagram, instagram_visible, role  } = this.state;        
        let type = photo.slice(5, 14);
        let photoData = photo.slice(22, photo.length);


        const dataImage = {
            name: name,
            photo: photoData,
            type: type
        }

        axios.post(`${url}/upload/`, dataImage, { headers: headers })
            .then( res => {
                let urls = res.data.Location;
                    this.setState({
                        urls: urls
                    })
                }
            )
            .then(res => {
                const { urls } = this.state;

                let event = {
                    event:{
                        event_id: "",
                        event_role: role
                    }
                }

                let data = { interest, email, company_name, name, phone, address, job_title, short_bio, website, country, facebook, facebook_visible,
                            photo: urls, twitter, twitter_visible, linkedin, linkedin_visible, instagram, instagram_visible, event }

                    const { id } = this.props.match.params;
    
                    let query = { 
                        query: {"_id": id},
                        update: data
                    }

                    console.log(query);

                    this.props.updatePeople(query);

                    this.props.history.push('/people-list');
                    // window.location.reload();
            })
            .catch(err => console.log(err));
    
    }

    render() {
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
                                                    <h5>Edit People</h5>
                                                    <span>Edit Peoples information</span>
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
                                                        <a href="/people-list">People profile list</a>
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
                                                                <h5>Edit People Profile</h5>
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
                                                            {/* { notification } */}
                                                            <form onSubmit={this.handleSubmit}>
                                                                <div className="card-body">
                                                                {/* <h3 className="card-title">Create An Event</h3> */}
                                                                <div className="row">
                                                                    <div className="col-xs-6 col-md-3">
                                                                        <img src={this.state.photoUrl} alt="..." style={{width:'150px', height: '150px'}}/>
                                                                    </div>
                                                                </div>
                                                                <br />
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Name</label>
                                                                        <input type="text" name="name" placeholder="Enter Name"
                                                                         onChange={this.handleChange} value={this.state.name} className="form-control" />
                                                                    </div>
                                                                    </div> 
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">phone</label>
                                                                        <input type="number" name="phone" placeholder="Enter Phone number"
                                                                         onChange={this.handleChange} value={this.state.phone} className="form-control" />
                                                                    </div>
                                                                    </div> 
                                                                    
                                                                </div>
                                                                <div className="row">
                                                                    
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Job Title</label>
                                                                        <input type="text" name="job_title" placeholder="Enter Your Job title"
                                                                         onChange={this.handleChange} value={this.state.job_title} className="form-control" />
                                                                    </div>
                                                                    </div> 
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Interest</label>
                                                                        <input type="text" name="interest" placeholder="Enter Interedt"
                                                                         onChange={this.handleChange} value={this.state.interest} className="form-control" />
                                                                    </div>
                                                                    </div> 
                                                                    
                                                                </div>
                                                                <div className="row">
                                                            
                                                                    <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Address</label>
                                                                        <input type="text" name="address" placeholder="Enter Address" 
                                                                        onChange={this.handleChange} value={this.state.address} className="form-control" />
                                                                    </div>
                                                                    </div> 

                                                                    <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Email</label>
                                                                        <input type="text" name="email" placeholder="Enter Company Email"
                                                                         onChange={this.handleChange} value={this.state.email} className="form-control" required/>
                                                                    </div>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Website</label>
                                                                        <input type="text" name="website" placeholder="Enter Website" 
                                                                        onChange={this.handleChange} value={this.state.website} className="form-control" />
                                                                    </div>
                                                                    </div> 
                                                                    
                                                                </div>

                                                                <div className="row">
                                                            
                                                                    <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Short Bio</label>
                                                                        <textarea name="short_bio" rows="3" maxLength={500} value={this.state.short_bio} onChange={this.handleChange}
                                                                        className="form-control" placeholder="Resource Description">
                                                                        </textarea>
                                                                        {/* <span>{this.state.short_bio.length }/500</span> */}
                                                                    </div>
                                                                    </div>
                                                                    
                                                                </div>


                                                                <div className="row">

                                                                   <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Country</label>
                                                                        <select name="country" className="form-control" onChange={this.handleChange} value={this.state.country}>
                                                                            <option value="">Select your country
                                                                            </option>
                                                                            { countryArray.map((data, i) => <option key={i} value={data}>{countries[data]}</option>)}
                                                                        </select>
                                                                    </div>
                                                                    </div> 

                                                                    <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Photo</label>
                                                                        <input type="file" className="form-control" onChange={this.fileChangedHandler}/>
                                                                    </div>
                                                                    </div> 

                                                                    <div className="col-md-5">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Facebook</label>
                                                                        <input type="text" name="facebook" placeholder="Enter facebook"
                                                                        onChange={this.handleChange} value={this.state.facebook} className="form-control" />
                                                                    </div>
                                                                    </div> 
                                                                    
                                                                </div>

                                                                <div className="row">

                                                                    <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Facebook Visible</label>
                                                                        <select name="facebook_visible" className="form-control" onChange={this.handleChange} value={this.state.facebook_visible}>
                                                                                <option value="">Select your event color
                                                                                </option>
                                                                                <option value="false">False</option>
                                                                                <option value="true">True</option>
                                                                        </select>
                                                                    </div>
                                                                    </div>  

                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Twitter</label>
                                                                        <input type="text" name="twitter" placeholder="Enter Twitter" 
                                                                        onChange={this.handleChange} value={this.state.twitter} className="form-control" />
                                                                    </div>
                                                                    </div> 

                                                                    <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Twitter Visible</label>
                                                                        <select name="twitter_visible" className="form-control" onChange={this.handleChange} value={this.state.twitter_visible}>
                                                                            <option value="">Select your twitter Visible
                                                                            </option>
                                                                            <option value="false">False</option>
                                                                            <option value="true">True</option>
                                                                        </select>
                                                                    </div>
                                                                    </div> 
                                                                    
                                                                </div>

                                                                <div className="row">
                     
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Company Name</label>
                                                                        <input type="text" name="company_name" placeholder="Enter Company name"
                                                                        onChange={this.handleChange} value={this.state.company_name} className="form-control" />
                                                                    </div>
                                                                    </div> 

                                                                                                                   
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Linkedin</label>
                                                                        <input type="text" name="linkedin" placeholder="Enter linkedin" 
                                                                        onChange={this.handleChange} value={this.state.linkedin} className="form-control" />
                                                                    </div>
                                                                    </div>  
      
                                                                </div>

                                                                <div className="row">
                                                                    <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Linkedin Visible</label>
                                                                        <select name="linkedin_visible" className="form-control" onChange={this.handleChange} value={this.state.linkedin_visible    }>
                                                                            <option value="">Select your linkedin Visible
                                                                            </option>
                                                                            <option value="false">False</option>
                                                                            <option value="true">True</option>
                                                                        </select>
                                                                    </div>
                                                                    </div> 
                                                                    
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Instagram</label>
                                                                        <input type="text" name="instagram" placeholder="Enter instagram" 
                                                                        onChange={this.handleChange} value={this.state.instagram} className="form-control" />
                                                                    </div>
                                                                    </div> 

                                                                    <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Instagram Visible</label>
                                                                        <select name="instagram_visible" className="form-control" onChange={this.handleChange} value={this.state.instagram_visible}>
                                                                            <option value="">Select your instagram Visible
                                                                            </option>
                                                                            <option value="false">False</option>
                                                                            <option value="true">True</option>
                                                                        </select>
                                                                    </div>
                                                                    </div>  
                                                                    
                                                                </div>
                                                                
                                                                <div className="row">
                                                                    
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Event Role</label>
                                                                        <select name="role" className="form-control" onChange={this.handleChange} value={this.state.role}>
                                                                            <option value="">Select Event Role
                                                                            </option>
                                                                            <option value="attendees">Attendees</option>
                                                                                <option value="sponsors">Sponsors</option>
                                                                                <option value="speakers">Speakers</option>
                                                                                <option value="organisers">Organisers</option>
                                                                        </select>
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
    peopleProfile: state.peopleProfile
});

export default connect(mapStateToProps, { getPeople, findPeople, updatePeople })(EditPeople);