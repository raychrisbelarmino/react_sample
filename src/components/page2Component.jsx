import React, {Component} from 'react'
import Component3 from './nonPageComponent.jsx';

class Page2 extends Component{
    constructor(){
        super();
        this.state = {
            sampleString: "Page2"
        }
    }

    componentDidMount(){

    }

    componentWillUnmount(){

    }

    render(){
        return(
            <div>
                <center>
                    <h1>{this.state.sampleString}</h1>
                    <Component3 a="Chris"/>
                </center>
            </div>
        );
    }
}

export default Page2;