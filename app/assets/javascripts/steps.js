var Step = function(callback, todo){
  this.changed = callback;
  if(todo.steps){
    this._steps = todo.steps;
  }
}

Step.prototype = {
  create: function(step){
    $.post("/api/steps", {step: step}, function(resp){
      this._steps.push(resp);
      this.changed();
    }.bind(this))
  },

  destroy: function(step){
    $.ajax("/api/steps/" + step.id,{
      type:"DELETE",
      success: function(){
                this._steps.forEach(function(el, index){
                  if(el.id === step.id){
                    this._steps.splice(index, 1);
                  }
                }.bind(this))
                this.changed();
              }.bind(this)
    });
  },

  toggleDone: function(step){
    step.done = !step.done;
    $.ajax("/api/steps/" + step.id,{
      type:"PATCH",
      data:{step: step},
      success: function(){
                this.changed();
               }.bind(this)
    });
  }
}
