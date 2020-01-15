import React from 'react';
import './App.css';
import Editor from "./Components/Editor";
import Previewer from "./Components/Preview";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '# Hi. Its markdown editor'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  

  render() {
    return (
      <div className="App">
        <div className="row">
          <button 
            className = "copy fas fa-copy" 
            onClick={() => navigator.clipboard.writeText(this.state.input)}
          >
          </button>
          <Editor method={this.handleChange} />
          <Previewer method={this.handleChange} output={this.state.input} />
        </div>
      </div>
    );
    
  }
}

export default App;