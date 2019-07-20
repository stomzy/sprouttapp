import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { connect } from 'react-redux';
import { getPeople } from '../../actions/peopleAction';
import { getEvents } from '../../actions/eventsAction';
import { addOrganizer } from '../../actions/companyProfileAction';

class AddOrganizers extends Component {
    constructor() {
        super();
        this.state = {
          email: "",
          eventid: "",
          participantid: ""
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.setState({
            email: id
        })

        this.props.getPeople();
        this.props.getEvents();
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { email, participantid, eventid } = this.state;
    
        const data = { organisers: participantid, events: eventid }

        let query = { 
            query: {"email": email},
            update: data
        }

        this.props.addOrganizer(query)
            .then(res => {
                this.setState({ success: "Organizer added to Company"})
            })
            .catch(err => {
                console.log(err)
            })

        // this.props.history.push('/events-list');

     
    
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
                                                    <h5>Add Organisers to Event</h5>
                                                    <span>Setting up organisers</span>
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
                                                        <a href="/company-list">Company List</a>
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
                                                                <h5>Add Organisers</h5>
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
                                                                        <label className="form-label">Event</label>
                                                                       
                                                                        <select name="eventid" className="form-control" onChange={this.handleChange} value={this.state.eventid} required>
                                                                            <option value="">Select Event
                                                                            </option>
                                                                            {this.props.events.events.map((data, i) => <option key={i} value={data._id}>{data.title}</option> )}
                                                                        </select>
                                                                    </div>
                                                                    </div> 
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Participants </label>
                                                                        
                                                                        <select name="participantid" className="form-control" onChange={this.handleChange} value={this.state.participantid} required>
                                                                            <option value="">Select Organiser
                                                                            </option>
                                                                            {this.props.peopleProfile.peoples.map((data, i) => <option key={i} value={data._id}>{data.name}</option> )}
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
    peopleProfile: state.peopleProfile,
    events: state.events,
});

// export default Event;
export default connect(mapStateToProps, { getPeople, getEvents, addOrganizer })(AddOrganizers);
