class Api::TodosController < ApplicationController
  def index
    @todos = Todo.all.to_json(:include => :steps)
    render json: @todos
    # render :index
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      flash.now[:errors] = @todo.errors.full_messages
      render json: @todo
    end
  end

  def show
    @todo = Todo.find(params[:id]).includes(:steps)
    render json: @todo
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update_attributes(todo_params)
      render json: @todo
    else
      flash.now[:errors] = @todo.errors.full_messages
      render json: @todo
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    if @todo.delete
      render json: @todo
    else
      flash.now[:errors] = @todo.errors.full_messages
      render json: @todo
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:title,:body,:done);
  end
end
