class Api::TodosController < ApplicationController
  def index
    @todos = Todo.all
    render json: @todos
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
    @todo = Todo.find(params[:id])
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