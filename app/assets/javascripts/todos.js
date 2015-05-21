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
    todo.done = !todo.done;
    $.ajax("/api/todos/"+todo.id,{
      type:"PATCH",
      data:{todo: todo},
      success: function(){
                this.changed();
               }.bind(this)
    });
  },

  all: function(){
    return this._todos.slice();
  }
};
