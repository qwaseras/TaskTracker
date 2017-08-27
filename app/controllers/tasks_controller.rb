class TasksController < ApplicationController
  before_action :set_task, only: [:show, :edit, :update, :destroy, :add_developer, :remove_developer]

  # GET /tasks
  # GET /tasks.json
  def index
    @tasks = Task.all
  end

  # GET /tasks/1
  # GET /tasks/1.json
  def show
  end

  # GET /tasks/new
  def new
    @task = Task.new
  end

  # GET /tasks/1/edit
  def edit
  end

  # POST /tasks
  # POST /tasks.json
  def create
    @task = Task.new(task_params)
    @task.save
    respond_with @task
  end

  # PATCH/PUT /tasks/1
  # PATCH/PUT /tasks/1.json
  def update
    if @task.update(task_params)
      respond_with @task, json: @task
    end
  end

  # DELETE /tasks/1
  # DELETE /tasks/1.json
  def destroy
    @task.destroy
    redirect_to @task.project
  end

  def add_developer
    @task.users <<  User.where(id: params[:user_ids])
    redirect_to @task,  notice: 'Developers was added.'
  end

  def remove_developer
    @task.users.delete(User.where(id: params[:user_id]))
    redirect_to @task,  notice: 'Developers was removed from task.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def task_params
      params.require(:task).permit(:title, :description, :project_id, :status, :user)
    end
end
