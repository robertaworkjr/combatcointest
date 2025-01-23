import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to console
    console.error('React Error Boundary caught an error:', error);
    console.error('Error Info:', errorInfo);
    
    // Update state to include error info
    this.setState({
      hasError: true,
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // Error path
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
          <div className="max-w-2xl w-full">
            <h1 className="text-2xl font-bold text-red-500 mb-4">Something went wrong</h1>
            <div className="bg-gray-900 p-4 rounded overflow-auto">
              <p className="text-red-400 mb-2">Error: {this.state.error?.message}</p>
              {this.state.errorInfo && (
                <pre className="text-sm text-gray-400 mt-2 whitespace-pre-wrap">
                  {this.state.errorInfo.componentStack}
                </pre>
              )}
              {process.env.NODE_ENV === 'development' && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-400">Stack trace:</p>
                  <pre className="text-xs text-gray-500 mt-2 whitespace-pre-wrap">
                    {this.state.error?.stack}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Normal path: render children
    return this.props.children;
  }
}

export default ErrorBoundary;