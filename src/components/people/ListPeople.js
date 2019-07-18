import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { connect } from 'react-redux';
import { getPeople } from '../../actions/peopleAction';

class People extends Component {
    componentDidMount() {
        this.props.getPeople();
    }

    handleDelete(id, e) {
        e.preventDefault();
        console.log(id);
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
                                                    <h5>Peoples info</h5>
                                                    <span>List People's information</span>
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
                                                        <a href="/people">Add People</a>
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
                                                                <h5>Add People</h5>
                                                                <div className="card-header-right">
                                                                    <a href="/people">
                                                                    <button className="btn btn-primary">Add People</button>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                            <div className="table-responsive">
                                                                    <table className="table table-xs table-hover table-outline card-table table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                      
                                                                        <th>Profile Id</th>
                                                                        <th>Full Name</th>
                                                                        <th>Phone</th>
                                                                        <th>Email</th>
                                                                        <th></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    {this.props.peopleProfile.peoples.map((data, i) => 
                                                                                  <tr key={i}>
                                                                                    {/* <td>{i += 1}</td> */}
                                                                                    <td>{data._id}</td>
                                                                                    <td><b>{data.title} {data.name}</b></td>
                                                                                    <td>{data.phone}</td>
                                                                                    <td>{data.email}</td>
                                                                                    <td className="text-right">
                                                                                        <a href={`/people-edit/${data._id}`}>
                                                                                            <button className="btn btn-info btn-sm">
                                                                                                <span className="glyphicon glyphicon-edit"></span> Edit
                                                                                            </button>
                                                                                        </a>
                                                                                        <button onClick={this.handleDelete.bind(this, data._id)} className="btn btn-danger btn-sm">
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
    peopleProfile: state.peopleProfile
});

export default connect(mapStateToProps, { getPeople })(People);