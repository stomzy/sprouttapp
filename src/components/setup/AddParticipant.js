import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { connect } from 'react-redux';
import { addParticipant, verifyParticipant, getSponsors } from '../../actions/participantAction';
import { getPeople } from '../../actions/peopleAction';

class AddParticipant extends Component {
    constructor() {
        super();
        this.state = {
          eventid: "",
          participantid: [],
          multiple: '',
          verified: false,
          as: "attendees",
          currentPage: 1,
          postsPerPage: 5,
          sponsors: null,
          participantAdded: null
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMultiple = this.handleMultiple.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.setState({
            eventid: id
        })

        let query = {query:{"_id": id}}; 

        this.props.getSponsors(query).then(res => {
            let data = res.data.data[0];

            this.setState({sponsors: data})
        })
        .catch(err=> {
            console.log(err);
        });

        this.props.getPeople();
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    getMultipleValues(value) {
        this.setState({participantAdded: `participant with id: ${value} selected.`})
        this.state.participantid.push(value);
    }

    handleMultiple(event) {
        [...event.target.options].filter(({selected}) => selected).map(({value}) => this.getMultipleValues(value));
        
    }

    handleSubmit(event) {
        event.preventDefault();
        const { participantid, eventid, verified, as } = this.state;

        participantid.forEach((value) =>{
          
            const data = { participantid: value, eventid, verified, as }
            console.log(data)
            // this.props.addParticipant(data).then(res => {
            //     console.log(res)
            //     this.setState({ success: "Participants added and verified"})
            //     this.props.verifyParticipant(data);
                
            // }).catch(err => {
            //     console.log(err)
            // })
        }) 
        this.setState({ participantid: []})
        // this.props.history.push('/events-list');
        // window.location.reload();
    
    }

    render() {
        let notification = "";
        let notify = "";

        if (this.state.success != null) {
            notification = (
                <div className="alert alert-success" role="alert">
                    { this.state.success }
                </div>
            );
        }

        if (this.state.participantAdded != null) {
            notify = (
                <span className="label label-danger"><b>{ this.state.participantAdded }</b></span>
            );
        }
        // console.log(typeof this.state.sponsors)

        let sponsors = []

        // pagination
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = sponsors.slice(indexOfFirstPost, indexOfLastPost);

        const paginate = (pageNumber) => this.setState({currentPage: pageNumber});

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
                                                    <h5>Add participant to Event</h5>
                                                    <span>Setting up Participant</span>
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
                                                        <a href="/events-list">Participant List</a>
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
                                                                <h5>Add Participants</h5>
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
                                                                        <label className="form-label">Event Id</label>
                                                                        <input type="text" name="eventid" placeholder="Enter Event Id" 
                                                                        onChange={this.handleChange} value={this.state.eventid} className="form-control" 
                                                                        required readOnly/>
                                                                    </div>
                                                                    </div> 
                                                                    <div className="col-md-6">
                                                                    {notify}
                                                                    <div className="form-group">
                                                                        <label className="form-label">Participant</label>
                                                                        {/* <input type="text" name="participantid" placeholder="Enter your participant Id" 
                                                                        onChange={this.handleChange} value={this.state.participantid} className="form-control" 
                                                                        required/> */}
                                                                        <select name="participantid" className="form-control" multiple={true} onChange={this.handleMultiple} value={[this.state.multiple]} required>
                                                                            <option value="">Select Participants
                                                                            </option>
                                                                            {this.props.peopleProfile.peoples.map((data, i) => <option key={i} value={data._id}>{data.name}</option> )}
                                                                        </select>
                                                                    </div>
                                                                    </div> 
                                                                
                                                                </div>
                                                             
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Verification</label>
                                                                           <select name="verified" className="form-control" onChange={this.handleChange} value={this.state.verified}>
                                                                                <option value="true">Verified</option>
                                                                                <option value="false">Unverified</option>
                                                                            </select>
                                                                    </div>
                                                                    </div> 

                                                                    <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Role</label>
                                                                         <select name="as" className="form-control" onChange={this.handleChange} value={this.state.as}>
                                                                                <option value="attendees">Attendees</option>
                                                                                <option value="sponsors">Sponsors</option>
                                                                                <option value="speakers">Speakers</option>
                                                                                {/* <option value="organisers">Organisers</option> */}
                                                                            </select>
                                                                    </div>
                                                                    </div>  
                                                                </div>
                                                                </div>
                                                                <div className="card-footer text-right">
                                                                <button type="submit" className="btn btn-primary">Submit</button>
                                                                </div>
                                                            </form>
                                                            {/* table */}
                                                            {/* <div className="card-block">
                                                                    <div className="table-responsive">
                                                                   
                                                                        <table className="table table-xs table-hover table-outline card-table table-striped">
                                                                        <thead>
                                                                            <tr>
                                                                            <th>S/N</th>
                                                                            <th>Event Id</th>
                                                                            <th>Sponsors</th>
                                                                            <th></th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            
                                                                            {currentPosts.map((data, i) => 
                                                                                  <tr key={i}>
                                                                                    <td>{i += 1}</td>
                                                                                    <td>{data._id}</td>
                                                                                    <td><span className="alert-danger">{data.start_time}</span></td>
                                                                                    <td className="text-right">
                                                                                        <button className="btn btn-danger btn-sm">
                                                                                                <span className="glyphicon glyphicon-trash"></span> Delete
                                                                                        </button>
                                                                                    </td>
                                                                               </tr>
                                                                            )}
                                                                        </tbody>
                                                                        </table>
                                                                        <Pagination postsPerPage={this.state.postsPerPage} totalPosts={sponsors.length} paginate={paginate} />
                                                                    </div>
                                                                                                     
                                                                </div> */}
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
});

// export default Event;
export default connect(mapStateToProps, { addParticipant, verifyParticipant, getPeople, getSponsors })(AddParticipant);
