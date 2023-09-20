import './App.css'
import React, {Component} from 'react'

class App extends Component{
  constructor(){
    super();
    this.nextPage = this.nextPage.bind(this);
  }

  nextPage(){
    this.props.history.push('page2');
  }

  render(){
    return(
      <div className='App'>
        <header className='App-header'>
          ...
          <br/>
          <button onClick={this.nextPage}>To Page2</button>
          <a href='/page2'>To Page2</a>
        </header>
      </div>
    );
  }
}

export default App;