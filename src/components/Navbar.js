import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import { clearCurrentProfile } from '../actions/profileActions';
import { withRouter} from 'react-router-dom';

class Navbar extends Component {
    onLogout(e) {
        e.preventDefault();
        this.props.clearCurrentProfile();
        this.props.logoutUser();
        this.props.history.push("/");
    }

    render() {

        const {isAuthenticated, user } = this.props.auth;

        return (
            <nav className="navbar header-navbar pcoded-header">
                        <div className="navbar-wrapper">
                            <div className="navbar-logo">
                                <a href="">
                                    {/* <img className="img-fluid" src="../files/assets/images/logo.pngn" alt="Sprout" /> */}
                                    <p>Sprout</p>
                                </a>
                                <a className="mobile-menu" id="mobile-collapse" href="">
                                    <i className="feather icon-menu icon-toggle-right"></i>
                                </a>
                                <a className="mobile-options waves-effect waves-light">
                                    <i className="feather icon-more-horizontal"></i>
                                </a>
                            </div>
                            <div className="navbar-container container-fluid">
                                <ul className="nav-left">
                                    <li className="header-search">
                                        <div className="main-search morphsearch-search">
                                            <div className="input-group">
                                                <span className="input-group-prepend search-close">
                                                    <i className="feather icon-x input-group-text"></i>
                                                </span>
                                                <input type="text" className="form-control" placeholder="Enter Keyword" />
                                                <span className="input-group-append search-btn">
                                                    <i className="feather icon-search input-group-text"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href=""
                                            className="waves-effect waves-light" data-cf-modified-e146055bae333d7872d2c05f-="">
                                            <i className="full-screen feather icon-maximize"></i>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="nav-right">
                                    <li className="user-profile header-notification">
                                        <div className="dropdown-primary dropdown">
                                            <div className="dropdown-toggle" data-toggle="dropdown">
                                                <img src="http://conferenceoeh.com/wp-content/uploads/profile-pic-dummy.png" className="img-radius"
                                                    alt="User-Profile-Image" />
                                                <span>{user.name}</span>
                                                <i className="feather icon-chevron-down"></i>
                                            </div>
                                            <ul className="show-notification profile-notification dropdown-menu"
                                                data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                                {/* <li>
                                                    <a href="">
                                                        <i className="feather icon-settings"></i> Settings
                                                    </a>
                                                </li> */}
                                                <li>
                                                    <a href="/profile">
                                                        <i className="feather icon-user"></i> Profile
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="" onClick={this.onLogout.bind(this)}>
                                                        <i className="feather icon-log-out"></i> Logout
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
        )
    }
}

Navbar.prototypes = {
    logoutUser: PropTypes.func.isRequired,
    // errors: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    // errors: state.errors
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(withRouter(Navbar));
// export default Navbar; 