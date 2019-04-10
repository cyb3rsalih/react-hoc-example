import React, {Component} from 'react'

const LoaderHOC = (WrappedComponent,field) => {

    return class LoaderHOC extends Component{
        render(){
            return this.props[field].length === 0 ? <div><h1>Loading...</h1></div> : <WrappedComponent {...this.props} />
        }
    }

}

export default LoaderHOC