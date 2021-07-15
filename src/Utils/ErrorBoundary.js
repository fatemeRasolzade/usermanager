import React from 'react'
import history from '../history';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      this.setState({
        hasError: true,
      })
        setTimeout(function(){
            history.push("/");
            window.location.reload()
         }, 3000);
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children; 
    }
  }


export default ErrorBoundary