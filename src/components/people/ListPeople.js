import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { connect } from 'react-redux';
import { getPeople, deletePeople, checkStatus } from '../../actions/peopleAction';
import Pagination from '../Pagination';
import Spinner from '../../common/Spinner';

class People extends Component {
    constructor() {
        super();
        this.state = {
            success: null,
            error: null,
            currentPage: 1,
            postsPerPage: 10,
        }
  
    }

    componentDidMount() {
        this.props.getPeople();
    }

    handleDelete(id, e) {
        e.preventDefault();
        let data = {id: id};
        this.props.deletePeople(data).then(res => {
            this.setState({ success: `People deleted Successfully`})
            window.location.reload();
        })
        .catch(err => {
            console.log(err);
        });
    } 

    checkStatus(email, e) {
        e.preventDefault();
       
        let data = {query : {email: email}, update: {isVerified: true}}

        console.log(data);
        this.props.checkStatus(data).then(res => {
            console.log(res)
            if (res.status === 200) {
                this.setState({
                    success: res.data.message
                })
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        let {peoples, loading } = this.props.peopleProfile;
        // spinner
        let spinner;

        if(peoples.length < 0 || loading) {
            spinner = <Spinner />;
        }

        // pagination
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = peoples.slice(indexOfFirstPost, indexOfLastPost);

        const paginate = (pageNumber) => this.setState({currentPage: pageNumber});

        let notification = "";
        if (this.state.success != null) {
            notification = (
                <div className="alert alert-success text-center" role="alert" >
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
                                                            { notification }
                                                            <div className="table-responsive">
                                                                    <table className="table table-xs table-hover table-outline card-table table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                      
                                                                        <th>S/N</th>
                                                                        <th>Full Name</th>
                                                                        {/* <th>Phone</th> */}
                                                                        <th>Email</th>
                                                                        <th></th>
                                                                        <th></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    {spinner}
                                                                    {currentPosts.map((data, i) => 
                                                                    
                                                                                  <tr key={i}>
                                                                                  
                                                                                    <td>{i+1}</td>
                                                                                    <td><b>{data.title} {data.name}</b></td>
                                                                                    {/* <td>{data.phone}</td> */}
                                                                                    <td>{data.email}</td>
                                                                                    <td></td>
                                                                                    <td className="text-right">
                                                                                            <button onClick={this.checkStatus.bind(this, data.email)} className="btn btn-warning btn-sm">
                                                                                                <span className="glyphicon glyphicon-user"></span> Verify User
                                                                                            </button>
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
                                                                <Pagination postsPerPage={this.state.postsPerPage} totalPosts={peoples.length} paginate={paginate} />
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

export default connect(mapStateToProps, { getPeople, deletePeople, checkStatus })(People);