import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { connect } from 'react-redux';
import { getFloors } from '../../actions/floorPlanAction';

class ListFloorPlan extends Component {
    componentDidMount() {
        this.props.getFloors();
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
                                                    <h5>Floor Plan info</h5>
                                                    <span>Setting up Floor Plan</span>
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
                                                        <a href="/floor-plan"> Add Floor Plan</a>
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
                                                                <h5> Program Lists</h5>
                                                                <div className="card-header-right">
                                                                    <a href="/floor-plan">
                                                                    <button className="btn btn-primary">Add Floor Plan</button>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                            <div className="table-responsive">
                                                                        <table  className="table table-xs table-hover table-outline card-table table-striped">
                                                                        <thead>
                                                                            <tr>
                                                                            <th>S/N</th>
                                                                            <th>Floor Id</th>
                                                                            <th>Floor Title</th>
                                                                            <th>Image Url</th>
                                                                            <th>Coordinates</th>
                                                                            <th>Actions</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {this.props.floorPlans.floors.map((data, i) => 
                                                                                  <tr key={i}>
                                                                                    <td>{i += 1}</td>
                                                                                    <td>{data._id}</td>
                                                                                    <td><b>{data.title}</b></td>
                                                                                    <td>{data.image}</td>
                                                                                    <td>{data.coordinates}</td>
                                                                                    <td><button className="btn btn-info btn-sm">
                                                                                            <span className="glyphicon glyphicon-edit"></span> Edit
                                                                                        </button>
                                                                                        <button className="btn btn-danger btn-sm">
                                                                                            <span className="glyphicon glyphicon-trash"></span> Edit
                                                                                        </button>
                                                                                    </td>
                                                                               </tr>
                                                                            )}
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
    floorPlans: state.floorPlans
});

// export default Event;
export default connect(mapStateToProps, { getFloors })(ListFloorPlan);
