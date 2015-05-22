var StepList = React.createClass({
  render: function(){
    var view = this.props.todo.steps.map(function(step){
      return <StepItem key={step.id} step={step} todo={this.props.todo}/>
    }.bind(this))

    return (
      <div>
        <ul>
          {view}
        </ul>
        <StepForm todo={this.props.todo}/>
      </div>
    )
  }
});
