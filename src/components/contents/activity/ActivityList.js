import React, { Component } from 'react';
import Sidebar from '../../Sidebar';
import Navbar from '../../Navbar';
import { connect } from 'react-redux';
import { getActivities } from '../../../actions/activityAction';


class ActivityList extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

        this.props.getActivities();
    }

    componentWillUnmount() {
        this.$el.DataTable.destroy(true)
    }

    render() {
         
           let table_row =  this.props.activities.activities.map((data, i) => {
                return (  
                    <tr key={i}>
                        <td>{i += 1}</td>
                        <td>{data._id}</td>
                        <td>{data.eventid}</td>
                        <td><b>{data.content}</b></td>
                        <td><span className="alert-danger">{data.time}</span></td>
                            <td><button className="btn btn-info btn-sm">
                                <span className="glyphicon glyphicon-edit"></span> Edit
                            </button>
                            <button className="btn btn-danger btn-sm">
                                <span className="glyphicon glyphicon-trash"></span> Delete
                            </button>
                        </td>
                    </tr>
                )
            });

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
                                                    <h5>Activity info</h5>
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
                                                        <a href="#!">Activity info</a>
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
                                                                <h5> Activity Lists</h5>
                                                                <div className="card-header-right">
                                                                    <a href="/activities">
                                                                    <button className="btn btn-primary">Create Activity</button>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                            <div className="table-responsive">
                                                         
                                                                        <table className="table table-xs table-hover table-outline card-table table-striped">
                                                                        <thead>
                                                                            <tr>
                                                                            <th>S/N</th>
                                                                            <th>Activity Id</th>
                                                                            <th>Event Id</th>
                                                                            <th>Content</th>
                                                                            {/* <th>Venue</th>
                                                                            <th>Start Date</th>
                                                                            <th>End Date</th> */}
                                                                            <th>Time</th>
                                                                            <th></th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        {table_row}
                                                                        </tbody>
                                                                        </table>
                                                            
                                                                    </div>
                                                           
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
    activities: state.activities
});

export default connect(mapStateToProps, { getActivities })(ActivityList);
