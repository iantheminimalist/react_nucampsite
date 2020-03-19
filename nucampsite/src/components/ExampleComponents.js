import React, { Component } from 'react';
//Passing components from com B to Com A
class ExampleParentComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            number: 333
        }
    }
    render(){
        return(<ExampleChildComponent number={this.state.number}/>
            );

    }
}

class ExampleChildComponent extends Component{
    render(){//props is a 'read-only' property
        return(
            <div>
                {this.props.number}
            </div>
        );
    }
}
export default ExampleParentComponent;