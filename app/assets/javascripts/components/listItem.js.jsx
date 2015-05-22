var ListItem = React.createClass({
  getInitialState: function(){
    return{
      expanded: false
    }
  },

  render: function(){
    var view;
    if (this.state.expanded){
      view = (
        <div>
          <p>{this.props.todo.body}</p>
          <StepList todo={this.props.todo}/>
          <button onClick={this.deleteTodo}>Delete</button>
        </div>
      )
    }

    return(
      <li>
        <h3 onClick={this.changeState}>{this.props.todo.title}</h3>
        <button onClick={this.setDone}>{this.props.todo.done ? "undo" : "done"}</button>
          {view}
      </li>
    )
  },

  changeState: function(){
    this.setState({expanded: !this.state.expanded});
  },

  deleteTodo: function(){
    window.todoInstance.destroy(this.props.todo);
  },

  setDone: function(){
    window.todoInstance.toggleDone(this.props.todo);
  }
})
