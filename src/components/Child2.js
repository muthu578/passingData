import React, {Component} from 'react';
class Child2 extends Component{
     
    render(){
        return(
            <div>
                <h2>Child 2</h2>
                <h2>{this.props.valueFromParent}</h2>
            </div>
        );
    }
}
export default Child2;