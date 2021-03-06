import React from 'react';
import './App.css';
import Editor from "./Components/Editor";
import Previewer from "./Components/Preview";
import NotificationSystem from 'react-notification-system';



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
  deleteNotification = event => {
    event.preventDefault();
    const notification = this.notificationSystem.current;
    notification.addNotification({
      message: 'Содержимое удалено',
      level: 'info'
    });

    document.getElementById("editor").value  = ""; 
    this.state.input = '';
    this.setState({
      input: ''
    });
  }

  notificationSystem = React.createRef();
  copyNotification = event => {
    event.preventDefault();
    const notification = this.notificationSystem.current;
    notification.addNotification({
      message: 'Содержимое скопировано',
      level: 'info'
    });
    navigator.clipboard.writeText(this.state.input);
  };

  render() {
    return (
      <div className="App">
        <div className="row">
          <Editor method={this.handleChange} />
          <div className='buttons'>
            <button 
              title='Copy'
              className = "copy fas fa-copy" 
              onClick={this.copyNotification}
            >
            </button>
            <button 
              title='Clear all'
              className = "delete fas fa-trash-alt" 
              onClick={
                this.deleteNotification
              }
            >
            </button>
            <form action='https://github.com/sandino/Markdown-Cheatsheet' target="_blank" alt='Help'>
              <button 
                title = 'Help'
                className = "cheatsheet fas fa-question-circle" 
              />
            </form>
          </div>
          <Previewer method={this.handleChange} output={this.state.input} />
        </div>
        <NotificationSystem ref={this.notificationSystem} />
      </div>
    );
    
  }
}

export default App;