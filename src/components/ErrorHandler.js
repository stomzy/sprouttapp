import React from 'react';
import PropTypes from 'prop-types';

class ErrorHandler extends React.Component {
    constructor(props) {
      super(props)
      this.state = { errorOccurred: false, error: null, info: null }
    }

    static propTypes = {
      children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
      ]).isRequired,
      render: PropTypes.func.isRequired
    }
  
    componentDidCatch(error, info) {
      this.setState({ errorOccurred: true, error, info })
    //   logErrorToMyService(error, info)
    }
  
    render() {
      return this.state.errorOccurred ? this.props.render(this.state.error, this.state.info) : this.props.children
    }
}

export default ErrorHandler;