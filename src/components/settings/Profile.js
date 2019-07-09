import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { connect } from 'react-redux';
import { createCompanyProfile } from '../../actions/companyProfileAction';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
          industry: "",
          name: "",
          phone: "",
          address: "",
        //   job_title: "",
          short_bio: "",
        //   interest: "",
          website: "",
          country: "",
          photo: "",
        //   company_name: "",
          facebook: "",
          facebook_visible: false,
          twitter: "",
          twitter_visible: false,
          linkedin: "",
          linkedin_visible: false,
          instagram: "",
          instagram_visible: false,
        //   event: "",
          email: "",
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
        const { industry, email, name, phone, address, short_bio,
            website, country, facebook, facebook_visible,
            twitter, twitter_visible, linkedin, linkedin_visible, instagram, instagram_visible } = this.state;
    
        const data = { industry, email, name, phone, address, short_bio,
            website, country, facebook, facebook_visible,
            twitter, twitter_visible, linkedin, linkedin_visible, instagram, instagram_visible }
        
        console.log('datad', data)

        this.props.createCompanyProfile(data);

        this.setState({ industry: "", email: "", name: "", phone: "", address: "", short_bio: "", 
            website: "", country: "", photo: "", facebook: "", facebook_visible: "",
            twitter: "", twitter_visible: "", linkedin: "", linkedin_visible: "", instagram: "", instagram_visible: "", success: "Company Profile addeed Successfully"})
    
    }

    imageChangedHandler = event => {
        const file = event.target.files[0];
        this.setState({ photo: file });
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
                                                    <h5>Company Profile info</h5>
                                                    <span>Setting up company Profile</span>
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
                                                        <a href="#!">Company Profile info</a>
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
                                                                <h5>Add Company Profile</h5>
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
                                                                        <label className="form-label">industry</label>
                                                                        <input type="text" name="industry" placeholder="Enter Industry" 
                                                                        onChange={this.handleChange} value={this.state.industry} className="form-control" 
                                                                        />
                                                                    </div>
                                                                    </div> 
                                                                    <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Name</label>
                                                                        <input type="text" name="name" placeholder="Enter Name"
                                                                         onChange={this.handleChange} value={this.state.name} className="form-control" />
                                                                    </div>
                                                                    </div> 
                                                                    <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className="form-label">phone</label>
                                                                        <input type="number" name="phone" placeholder="Enter Phone number"
                                                                         onChange={this.handleChange} value={this.state.phone} className="form-control" />
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
                                                                         onChange={this.handleChange} value={this.state.email} className="form-control" />
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
                                                                        <span>{this.state.short_bio.length}/500</span>
                                                                    </div>
                                                                    </div>
                                                                    
                                                                </div>


                                                                <div className="row">

                                                                    <div className="col-md-4">
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

                                                                    <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Logo</label>
                                                                        <input type="file" className="form-control" onChange={this.imageChangedHandler}/>
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
                                                                        <label className="form-label">Linkedin</label>
                                                                        <input type="text" name="linkedin" placeholder="Enter linkedin" 
                                                                        onChange={this.handleChange} value={this.state.linkedin} className="form-control" />
                                                                    </div>
                                                                    </div>  

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
                                                                    
                                                                </div>

                                                                <div className="row">
                                                                    
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
                                                                
                                
                                                                {/* <div className="row">
                                                                    <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Description</label>
                                                                        <textarea name="description" rows="3" value={this.state.description} onChange={this.handleChange}
                                                                        className="form-control" placeholder="Resource Description">
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

// export default Profile;
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    events: state.events,
    programs: state.programs
});

export default connect(mapStateToProps, { createCompanyProfile })(Profile);
