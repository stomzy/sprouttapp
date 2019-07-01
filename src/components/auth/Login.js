import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../../common/TextFieldGroup';

class Login extends Component {
    constructor() {
        super();
        this.state = {
          email: '',
          password: '',
          errors: ''
        };
    
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    canBeSubmitted() {
        const { email, password } = this.state;
        return ( email.includes('@') && password.length >= 6);
    }
  
    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { email, password } = this.state;
       
        const data = {
          email,
          password
        }

        console.log('data', data);

        this.props.loginUser(data);
    }
  
    
    render() {
        // getting the auth state
        // const { user } = this.props.auth;

        const { errors } = this.state;

        const isEnabled = this.canBeSubmitted();
        let alert = "";
        if (errors.length > 0) {
        alert = (<div className="alert alert-danger" role="alert">
        { errors }
        </div>);
        }

        return (
            <div className="col-sm-4 margin-auto">
                 { alert }
                 {/* {user ? user.email : null } */}
                <form className="md-float-material form-material" onSubmit={this.handleSubmit}>
                    <div className="text-center">
                        {/* <img src="../files/assets/images/logo.png" alt="logo.png" /> */}
                    </div>
                    <br />
                    <div className="auth-box card">
                        <div className="card-block">
                            <div className="row m-b-20">
                                <div className="col-md-12">
                                    <h3 className="text-center txt-primary">Sign In</h3>
                                </div>
                            </div>
                            {/* <div className="row m-b-20">
                                <div className="col-md-6">
                                    <button className="btn btn-facebook m-b-20 btn-block"><i
                                            className="icofont icofont-social-facebook"></i>facebook</button>
                                </div>
                                <div className="col-md-6">
                                    <button className="btn btn-twitter m-b-20 btn-block"><i
                                            className="icofont icofont-social-twitter"></i>twitter</button>
                                </div>
                            </div> */}
                            <p className="text-muted text-center p-b-5">Sign in with your registered credentials</p>
                            <TextFieldGroup 
                                // placeholder="Enter Your Email"
                                name="email"
                                onChange={this.handleChange}
                                value={this.state.email}
                                type="text"
                                label="Email"
                            />
                            
                            {/* <div className="form-group form-primary">
                                <input type="text" name="email" className="form-control"
                                value={this.state.email} onChange={this.handleChange} required="" />
                                <span className="form-bar"></span>
                                <label className="float-label">Email</label>
                            </div> */}
                            <TextFieldGroup 
                                // placeholder="Enter Your Password"
                                name="password"
                                onChange={this.handleChange}
                                value={this.state.password}
                                type="password"
                                label="Password"
                            />

                            {/* <div className="form-group form-primary">
                                <input type="password" name="password" className="form-control"
                                 value={this.state.password} onChange={this.handleChange} required="" />
                                <span className="form-bar"></span>
                                <label className="float-label">Password</label>
                            </div> */}
                            <div className="row m-t-25 text-left">
                                <div className="col-12">
                                    {/* <div className="checkbox-fade fade-in-primary">
                                        <label>
                                            <input type="checkbox" value="" />
                                            <span className="cr"><i
                                                    className="cr-icon icofont icofont-ui-check txt-primary"></i></span>
                                            <span className="text-inverse">Remember me</span>
                                        </label>
                                    </div> */}
                                    <div className="forgot-phone text-right float-right">
                                        <a href="auth-reset-password.html" className="text-right f-w-600"> Forgot
                                            Password?</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-t-30">
                                <div className="col-md-12">
                                    <button type="submit"
                                        disabled={!isEnabled}
                                        className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">LOGIN</button>
                                </div>
                            </div>
                            {/* <p className="text-inverse text-left">Don't have an account?<a
                                    href="auth-sign-up-social.html"> <b>Register here </b></a>for free!</p> */}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

Login.prototypes = {
    loginUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

// accessing global state
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

// export default connect(null, { loginUser })(Login);
// mapping to state
export default connect(mapStateToProps, { loginUser })(Login);