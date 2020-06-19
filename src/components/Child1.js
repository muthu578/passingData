import React, {Component} from 'react';
class Child1 extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.valueFromParent}</h2>
            </div>
        );
    }
}
export default Child1;