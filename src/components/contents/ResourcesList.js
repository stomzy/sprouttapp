import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { connect } from 'react-redux';
import { getResources, deleteResource } from '../../actions/resourceActions';

class ResourcesList extends Component {
    componentDidMount() {
        this.props.getResources();
    }

    handleDelete(id, e) {
        e.preventDefault();
        let data = {id: id};
        this.props.deleteResource(data).then(res => {
            this.setState({ success: `Resource deleted Successfully`})
            window.location.reload();
        })
        .catch(err => {
            console.log(err);
        });
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
                                                    <h5>Resources info</h5>
                                                    <span>Setting up Resources info</span>
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
                                                        <a href="#!">Resources info</a>
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
                                                                <h5> Resources Lists</h5>
                                                                <div className="card-header-right">
                                                                    <a href="/resource">
                                                                    <button className="btn btn-primary">Add Resource</button>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                            <div className="table-responsive">
                                                                        <table id="order-table" className="table table-xs table-hover table-outline card-table table-striped">
                                                                        <thead>
                                                                            <tr>
                                                                            <th>S/N</th>
                                                                            <th>Resource Title</th>
                                                                            <th>Resource Url</th>
                                                                            <th>Actions</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {this.props.resources.resources.map((data, i) => 
                                                                                  <tr key={i}>
                                                                                    <td>{i += 1}</td>
                                                                                    <td><b>{data.title}</b></td>
                                                                                    <td><a href={data.url}>{data.url}</a></td>
                                                                                    <td>
                                                                                    <a href={`/resource-edit/${data._id}`}>
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
    events: state.events,
    resources: state.resources
});

export default connect(mapStateToProps, { getResources, deleteResource })(ResourcesList);
