import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    tasks: ['task 1', 'task 2', 'task 3']
  }

  handleSubmit = term => {
    this.setState({tasks: [...this.state.tasks, term]})
  }

  render(){
    return(
    <div>
      <Header numTodos = {this.state.tasks.length}/>
      <TodoList tasks = {this.state.tasks}/>
      <SubmitForm onFormSubmit = {this.handleSubmit}/>
    </div>
    )
  }
}

const Header = (props) => {
  return(
    <div>
      You have {props.numTodos} things to do
    </div>
  )
}

const TodoList = (props) => {
const todos = props.tasks.map((todo) => {return <Todo content = {todo}/>})
return(
  <div>
    {todos}
  </div>
)
}

const Todo = (props) => {
  return(
    <div>
      {props.content}
    </div>
  )
}

class SubmitForm extends React.Component{
  state = {term: ''}

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.term === '') return
    this.props.onFormSubmit(this.state.term)
    this.setState({term: ''})
  }

  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
        <input type = "text"
        placeholder = "Enter task here"
        value = {this.state.term}
        onChange = {(e) => this.setState({term: e.target.value})}/>
        <button> Submit </button>
      </form>
    )
  }
}

export default App;

