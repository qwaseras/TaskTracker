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

    respond_to do |format|
      if @task.save
        format.html { redirect_to @task.project, notice: 'Task was successfully created.' }
      else
        format.html { redirect_to @task.project, alert: 'Task was not created.' }
      end
    end
  end

  # PATCH/PUT /tasks/1
  # PATCH/PUT /tasks/1.json
  def update
    respond_to do |format|
      if @task.update(task_params)
        format.html { redirect_to @task, notice: 'Task was successfully updated.' }
      else
        format.html { redirect_to @task, alert: 'Task was not updated.' }
      end
    end
  end

  # DELETE /tasks/1
  # DELETE /tasks/1.json
  def destroy
    @task.destroy
    respond_to do |format|
      format.html { redirect_to @task.project, notice: 'Task was successfully destroyed.' }
    end
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
