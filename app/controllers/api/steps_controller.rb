class Api::StepsController < ApplicationController
  def create
    @step = Step.new(step_params)
    if @step.save
      render json: @step
    else
      flash.now[:errors] = @step.errors.full_messages
      render json: @step
    end
  end

  def update
    @step = Step.find(params[:id])
    if @step.update_attributes(step_params)
      render json: @step
    else
      flash.now[:errors] = @step.errors.full_messages
      render json: @step
    end
  end

  def destroy
    @step = Step.find(params[:id])
    if @step.delete
      render json: @step
    else
      flash.now[:errors] = @step.errors.full_messages
      render json: @step
    end
  end

  private
  def step_params
    params.require(:step).permit(:todo_id,:body,:done);
  end
end
