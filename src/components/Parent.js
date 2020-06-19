import React, {Component} from 'react';
import Child1 from './Child1';
class Parent extends Component{
   ParentFunction = (data_from_child) => {
       console.log(data_from_child)
   }
    
    render(){
        return(
            <div>      
                <Child1 functionCallFromParent={this.ParentFunction.bind(this)}/>
            </div>
        );
    }
}
export default Parent;