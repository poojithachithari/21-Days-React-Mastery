import React from "react";
class ClassErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasError:false,
            error:null,
            errorInfo: null
        }
    }
    static getDerivedStateFromError(error){
        console.log('Error caught! getDerivedStateFromError called')
        return{hasError: true}
    }

    componentDidCatch(error,errorInfo){
        console.log('componentDidCatch called')
        console.log('Error', error)
        console.log('error Info:', errorInfo)

        this.setState({
            error:error,
            errorInfo: errorInfo
        })
    }

    handleReset = ()=>[
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null
        })
    ]

render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '30px',
          backgroundColor: '#ffebee',
          border: '2px solid #f44336',
          borderRadius: '10px',
          margin: '20px 0'
        }}>
          <h2 style={{ color: '#c62828' }}>⚠️ Oops! Component Crashed</h2>
          <p style={{ color: '#666', marginTop: '10px' }}>
            The component encountered an error and couldn't render.
          </p>
          
          <details style={{ marginTop: '20px', cursor: 'pointer' }}>
            <summary style={{ fontWeight: 'bold' }}>Error Details (click to expand)</summary>
            <pre style={{ 
              backgroundColor: '#f5f5f5', 
              padding: '10px', 
              borderRadius: '5px',
              overflow: 'auto',
              fontSize: '12px',
              marginTop: '10px'
            }}>
              {this.state.error && this.state.error.toString()}
              {'\n\n'}
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </pre>
          </details>

          <button
            onClick={this.handleReset}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Try Again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
export default ClassErrorBoundary;