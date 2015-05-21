var TodoForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function(){
    return {
        title: "Todo Title",
        body: "Todo Body"
    }
  },

  render: function(){
    return (
            <div id="todo-form">
              <input type="text" valueLink={this.linkState('title')} />
              <textarea valueLink={this.linkState('body')} />
              <button onClick={this.submitForm}>Submit</button>
            </div>
          );
  },

  // changeTitle: function(e){
  //   this.setState({todo: {
  //     title: e.target.value,
  //     body: this.state.todo.body,
  //     done:false
  //   }});
  // },
  //
  // changeBody: function(e){
  //   this.setState({todo: {
  //     body: e.target.value,
  //     title: this.state.todo.title,
  //     done: false
  //   }});
  // },


  submitForm: function(){
    var newTodo = {title: this.state.title, body: this.state.body, done: false};
    window.todoInstance.create(newTodo);
  }
})
