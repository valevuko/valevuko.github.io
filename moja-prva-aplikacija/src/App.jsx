import './App.css';
import React from 'react';
import FormInput from './FormInput/FormInput';
import TodoList from './TodoList/TodoList';

class App extends React.Component {

  state = {
    todos: []
  }

  render() {
    return (
      <div className='app'>
        <FormInput />
        <TodoList todos={this.todos} />
      </div>
    );
  }
}

export default App;
