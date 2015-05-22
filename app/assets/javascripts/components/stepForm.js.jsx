var StepForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function(){
    return {
        body: "Add Step"
    }
  },

  render: function(){
    return (
            <div className="step-form">
              <input type="text" valueLink={this.linkState('body')} />
              <button onClick={this.submitForm}>Add</button>
            </div>
          );
  },

  submitForm: function(){
    var newStep = {body: this.state.body, todo_id: this.props.todo.id, done: false};
    this.props.todo.stepInstance.create(newStep);
  }
})
