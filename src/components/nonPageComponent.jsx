import React, {Component} from 'react'

class Component3 extends Component{
    constructor(){
        super();
        this.state = {
            sampleString: "Name is: "
        }
    }

    componentDidMount(){
        var temp = this.state.sampleString + this.props.a
        this.setState({
            sampleString: temp
        })
    }

    componentWillUnmount(){

    }

    render(){
        return(
            <div>
                <center>
                    <h1>{this.state.sampleString}</h1>
                </center>
            </div>
        );
    }
}

export default Component3;