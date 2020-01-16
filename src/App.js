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
  DeleteText() {
    document.getElementById("editor").value  = ""; 
    this.state.input = '';
    this.setState({
      input: ''
    });
  }
  

  render() {
    return (
      <div className="App">
        <div className="row">
          <Editor method={this.handleChange} />
          <div className='buttons'>
            <button 
              className = "copy fas fa-copy" 
              onClick={() => navigator.clipboard.writeText(this.state.input)}
            >
            </button>
            <button 
              className = "delete fas fa-trash-alt" 
              onClick={() => {
                
                this.DeleteText();
              }}
            >
            </button>
          </div>
          <Previewer method={this.handleChange} output={this.state.input} />
        </div>
      </div>
    );
    
  }
}

export default App;