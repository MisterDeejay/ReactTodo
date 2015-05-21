var globalRender = function() {
  React.render(<TodoList todos={window.todoInstance}/>, document.body);
}
