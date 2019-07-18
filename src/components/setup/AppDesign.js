import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { ChromePicker } from 'react-color';
import "./AppDesign.css";
import { connect } from 'react-redux';
import { uploads } from '../../actions/uploads';

class AppDesign extends Component {
    constructor() {
        super();
        this.state = {
          theme: "",
          logo: null,
          header_image1: null,
          header_image2: null,
          header_image3: null,
          displayColorPicker: false,
          background: '',
          caption1: '',
          caption2: '',
          caption3: '',
          appName: '',
          logoUrl: '',
          header_image1_Url: '',
          header_image2_Url: '',
          header_image3_Url: ''
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeComplete = (color) => {
        // console.log(color)
        this.setState({ background: color.hex });
      };

    onHandleShowColorPicker = () => {
        this.setState({displayColorPicker: true});
    }

    onHandleCloseColorPicker = () => {
        this.setState({displayColorPicker: false});
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    componentWillReceiveProps(NextProps) {
      
        // let data = NextProps.events.event;
        console.log(NextProps);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.uploadLogo();
        this.uploadHeader1();
        this.uploadHeader2();
        this.uploadHeader3();

        
        
        const { theme, background, logoUrl, header_image1_Url, header_image2_Url, header_image3_Url } = this.state;
        
        const data = { theme, background, logoUrl, header_image1_Url, header_image2_Url, header_image3_Url }
        
        console.log('datad', data)

        // this.props.createEvent(data)

        const imagesUploaded = this.props;

        console.log(imagesUploaded);
        
        this.setState({ theme: "", color: "", success: `App setup Completed..`})
       
    
    }

    uploadLogo = () => {
        let { logo, theme } = this.state;
        let type = logo.slice(5, 14);
        let photo = logo.slice(22, logo.length);

        const dataImage = {
            name: theme,
            photo: photo,
            type: type
        }

        this.props.uploads(dataImage);
    }

    uploadHeader1 = () => {
        let { header_image1, caption1 } = this.state;
        let imageType = header_image1.slice(5, 14);
        let imagePhoto = header_image1.slice(22, header_image1.length);

        const headImage = {
            name: caption1,
            photo: imagePhoto,
            type: imageType
        }

        this.props.uploads(headImage);
    }

    uploadHeader2 = () => {
        let { header_image2, caption2 } = this.state;
        let imageType = header_image2.slice(5, 14);
        let imagePhoto = header_image2.slice(22, header_image2.length);

        const headImage = {
            name: caption2,
            photo: imagePhoto,
            type: imageType
        }

        this.props.uploads(headImage);
    }

    uploadHeader3 = () => {
        let { header_image3, caption3 } = this.state;
        let imageType = header_image3.slice(5, 14);
        let imagePhoto = header_image3.slice(22, header_image3.length);

        const headImage = {
            name: caption3,
            photo: imagePhoto,
            type: imageType
        }

        this.props.uploads(headImage);
    }

    fileChangedHandler = event => {
        let self = this;
        let reader = new FileReader();
        const file = event.target.files[0];
        
        reader.onload = function(upload) {
            // console.log(upload.target);
            self.setState({ logo: upload.target.result });
        };

        reader.readAsDataURL(file);  
    }

    imageChangedHandler1 = event => {
        let self = this;
        let reader = new FileReader();
        const file = event.target.files[0];
        
        reader.onload = function(upload) {
            self.setState({ header_image1: upload.target.result });
        };

        reader.readAsDataURL(file); 
    }

    imageChangedHandler2 = event => {
        let self = this;
        let reader = new FileReader();
        const file = event.target.files[0];
        
        reader.onload = function(upload) {
            self.setState({ header_image2: upload.target.result });
        };

        reader.readAsDataURL(file); 
    }

    imageChangedHandler3 = event => {
        let self = this;
        let reader = new FileReader();
        const file = event.target.files[0];
        
        reader.onload = function(upload) {
            self.setState({ header_image3: upload.target.result });
        };

        reader.readAsDataURL(file); 
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
                                                    <h5>App Design</h5>
                                                    <span>Setting up App Design</span>
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
                                                        <a href="#!">App Design</a>
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
                                                                <h5>Add App Design</h5>
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
                                                                    <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Theme</label>
                                                                        <select name="theme" className="form-control" onChange={this.handleChange} value={this.state.theme}>
                                                                            <option value="opt1">Select Customize Theme
                                                                            </option>
                                                                            <option value="theme2">Theme 1</option>
                                                                            {/* <option value="theme2">Theme 2</option>
                                                                            <option value="theme3">Theme 3</option>
                                                                            <option value="theme4">Theme 4</option> */}
                                                                            {/* <option value="opt5">Type 5</option>
                                                                            <option value="opt6">Type 6</option>
                                                                            <option value="opt7">Type 7</option>
                                                                            <option value="opt8">Type 8</option> */}
                                                                        </select>
                                                                    </div>
                                                                    </div> 
                                                                    <div className="col-md-4">
                                                                    <div className="form-group">
                                                    
                                                                        <label className="form-label">App Name</label>
                                                                        <input type="text" name="appName" onChange={this.handleChange} value={this.state.appName} className="form-control" />
                                                                    </div>
                                                                    </div> 
                                                                
                                                                    <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className="form-label">Color</label>
                                                                        
                                                                        <input 
                                                                            type="text" 
                                                                            name="colorPickerText"
                                                                            onClick={() => this.onHandleShowColorPicker()} 
                                                                            className="form-control"
                                                                            defaultValue={this.state.background}
                                                                        />
                                                                        
                                                                        {this.state.displayColorPicker && (
                                                                            <div className={"color-picker-palette"}>
                                                                                <div className={"color-picker-cover"}
                                                                                    onClick={() => this.onHandleCloseColorPicker()} 
                                                                                />
                                                                                <ChromePicker color={ this.state.background } 
                                                                        onChangeComplete={ this.handleChangeComplete }/></div>)}
                                                                        
                                                                    </div>
                                                                    </div> 
                                                                    
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                    <div className="form-group">
                                                                    {/* {this.state.logo === null ? null : (
                                                                            <div className="card" style={{width: '20rem', height: '20rem'}}>
                                                                                 <img src={this.state.logo}/>
                                                                             </div>
                                                                    )} */}
                                                                       
                                                                        <label className="form-label">Logo</label>
                                                                        <input type="file" className="form-control"  onChange={this.fileChangedHandler}/>
                                                                    </div>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        {/* {this.state.header_image === null ? null : (
                                                                                <div class="card" style={{width: '20rem', height: '20rem'}}>
                                                                                    <img src={this.state.header_image1} />
                                                                                </div>
                                                                        )} */}
                                                                            <label className="form-label">Homepage Image 1</label>
                                                                        <input type="file" className="form-control" onChange={this.imageChangedHandler1}/>
                                                                    </div>
                                                                    </div> 
                                                                    <div className="col-md-4">
                                                                    <div className="form-group">
                                                    
                                                                        <label className="form-label">Caption</label>
                                                                        <input type="text" className="form-control" name="caption1"
                                                                         onChange={this.handleChange} value={this.state.caption1} />
                                                                    </div>
                                                                    </div> 
                                                                </div>
                                                                <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        {/* {this.state.header_image === null ? null : (
                                                                                <div class="card" style={{width: '20rem', height: '20rem'}}>
                                                                                    <img src={this.state.header_image2}/>
                                                                                </div>
                                                                        )} */}
                                                                            <label className="form-label">Homepage Image 2</label>
                                                                        <input type="file" className="form-control" onChange={this.imageChangedHandler2}/>
                                                                    </div>
                                                                    </div> 
                                                                    <div className="col-md-3">
                                                                    <div className="form-group">
                                                    
                                                                        <label className="form-label">Caption</label>
                                                                        <input type="text" className="form-control" name="caption2" 
                                                                        onChange={this.handleChange} value={this.state.caption2}/>
                                                                    </div>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        {/* {this.state.header_image === null ? null : (
                                                                                <div class="card" style={{width: '20rem', height: '20rem'}}>
                                                                                    <img src={this.state.header_image3}/>
                                                                                </div>
                                                                        )} */}
                                                                            <label className="form-label">Homepage Image 3</label>
                                                                        <input type="file" className="form-control" onChange={this.imageChangedHandler3}/>
                                                                    </div>
                                                                    </div> 
                                                                    <div className="col-md-3">
                                                                    <div className="form-group">
                                                    
                                                                        <label className="form-label">Caption</label>
                                                                        <input type="text" className="form-control" name="caption3"
                                                                        onChange={this.handleChange} value={this.state.caption3}/>
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
    uploads: state.uploads
});

// export default Event;
export default connect(mapStateToProps, { uploads })(AppDesign);