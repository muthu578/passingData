import React, {Component} from 'react';
import Child1 from './Child1';
class Parent extends Component{
    value="Value From Parent";
    render(){
        return(
            <div>
                <Child1 valueFromParent={this.value}/>
            </div>
        );
    }
}
export default Parent;