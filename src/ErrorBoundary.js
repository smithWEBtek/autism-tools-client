import React from 'react';
import logErrorToMyService from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // https://jonbellah.com/articles/react-error-boundary/
    // You can also log the error to an error reporting service
    // First, in componentDidCatch, you’ll notice the pseudo-method 
    // logErrorToMyService(). 
    // If you’re using a third-party error tracking service, 
    // like Rollbar or Raygun, this is an excellent place to log those errors.
    logErrorToMyService(error, errorInfo);
    console.log('ERROR BOUNDARY: ', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    // return this.props.children is 
    // everything between our <ErrorBoundary></ErrorBoundary> wrapper.
    return this.props.children;
  }
}

export default ErrorBoundary;
