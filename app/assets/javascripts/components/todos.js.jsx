var TodoList = React.createClass({
  render: function(){
    var view = this.props.todos.all().map(function(todo){
      return <ListItem key={todo.id} todo={todo}/>
    })

    return(
      <div>
      <ul>
        {view}
      </ul>
      <TodoForm/>
      </div>
    )
  },

  componentDidMount: function(){
    this.props.todos.fetch();
  }

})
