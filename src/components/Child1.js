import React, {Component} from 'react';
class Child1 extends Component{
    childFunction = (e) => {
        e.preventDefault(); 
        this.props.functionCallFromParent('Hello From Child')

    }
    render(){
        return(
            <div>   
                <button onClick={this.childFunction.bind(this)}>
            onClick

                </button>
            </div>
        );
    }
}
export default Child1;