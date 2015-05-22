var Todo = function(callback){
  this.changed = callback;
  this._todos = [];
}

Todo.prototype = {
  fetch: function() {
    $.getJSON("/api/todos", function(data){
      this._todos = data;
      this.changed();
    }.bind(this))
  },

  create: function(todo){
    $.post("/api/todos", {todo: todo}, function(resp){
      resp.steps = [];
      this._todos.push(resp);
      this.changed();
    }.bind(this))
  },

  destroy: function(todo){
    $.ajax("/api/todos/"+todo.id,{
      type:"DELETE",
      success: function(){
                this._todos.forEach(function(el, index){
                  if(el.id === todo.id){
                    this._todos.splice(index, 1);
                  }
                }.bind(this))
                this.changed();
              }.bind(this)
    });
  },

  toggleDone: function(todo){
    newTodo = {
      id: todo.id,
      done: !todo.done,
      title: todo.title,
      body: todo.body
    }

    $.ajax("/api/todos/"+todo.id,{
      type:"PATCH",
      data:{todo: newTodo},
      success: function(){
                todo.done = !todo.done;
                this.changed();
               }.bind(this)
    });
  },

  all: function(){
    return this._todos.slice();
  }
};
