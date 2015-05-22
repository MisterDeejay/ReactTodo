var StepItem = React.createClass({
  render: function(){
    return (
      <li>
        <p>{this.props.step.body}</p>
        <button onClick={this.setDone}>{this.props.step.done ? "undo" : "done"}</button>
        <button onClick={this.deleteStep}>Delete</button>
      </li>
    )
  },

  deleteStep: function(){
    this.props.todo.stepInstance.destroy(this.props.step);
  },

  setDone: function(){
    this.props.todo.stepInstance.toggleDone(this.props.step);
  }
})
