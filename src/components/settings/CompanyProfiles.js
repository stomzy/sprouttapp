import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { connect } from 'react-redux';
import { getCompanyProfiles } from '../../actions/companyProfileAction';

class CompanyProfiles extends Component {
    componentDidMount() {
        this.props.getCompanyProfiles();
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
                                                    <h5>Company profile info</h5>
                                                    <span>Setting up Company info</span>
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
                                                        <a href="/company">Company info</a>
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
                                                                <h5> Company Profile Lists</h5>
                                                                <div className="card-header-right">
                                                                    <a href="/company">
                                                                    <button className="btn btn-primary">Add Company</button>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                            <div className="table-responsive">
                                                                        <table className="table table-xs table-hover table-outline card-table table-striped">
                                                                        <thead>
                                                                            <tr>
                                                                            {/* <th>S/N</th> */}
                                                                            {/* <th>Profile Id</th> */}
                                                                            <th>Company Name</th>
                                                                            <th>Email</th>
                                                                            <th>Address</th>
                                                                            <th></th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {this.props.companyProfiles.companyProfiles.map((data, i) => 
                                                                                  <tr key={i}>
                                                                                    {/* <td>{i += 1}</td> */}
                                                                                    {/* <td>{data._id}</td> */}
                                                                                    <td><b>{data.name}</b></td>
                                                                                    <td>{data.email}</td>
                                                                                    <td>{data.phone}</td>
                                                                                    <td>
                                                                                        <a href={`/organizers/${data.email}`}>
                                                                                            <button className="btn btn-success btn-sm">
                                                                                                <span className="glyphicon glyphicon-user"></span> Add Organizers
                                                                                            </button>
                                                                                        </a>
                                                                                        <a href={`/company-edit/${data._id}`}>
                                                                                            <button className="btn btn-info btn-sm">
                                                                                                <span className="glyphicon glyphicon-edit"></span> Edit
                                                                                            </button>
                                                                                        </a>
                                                                                    <button className="btn btn-danger btn-sm">
                                                                                        <span className="glyphicon glyphicon-trash"></span> Delete
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
    companyProfiles: state.companyProfiles
});

export default connect(mapStateToProps, { getCompanyProfiles })(CompanyProfiles);