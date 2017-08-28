class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy, :add_developer, :remove_developer]

  # GET /projects
  # GET /projects.json
  def index
    @projects = current_user.projects
  end

  # GET /projects/1
  # GET /projects/1.json
  def show
  end

  # GET /projects/new
  def new
    @project = Project.new
  end

  # GET /projects/1/edit
  def edit
  end

  # POST /projects
  # POST /projects.json
  def create
    @project = Project.new(project_params)
    @project.users << current_user
    if @project.save
      render json: @project
    end
  end

  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json
  def update
    if @project.update(title: project_params[:title])
      render json: @project
    end
  end

  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    @project.destroy
    render json: @project
  end

  def add_developer
    @project.users <<  User.where(id: params[:user_ids])
    redirect_to @project,  notice: 'Developers was added.'
  end

  def remove_developer
    @project.users.delete(User.where(id: params[:user_id]))
    redirect_to @project,  notice: 'Developers was removed from project.'
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_params
      params.require(:project).permit(:title)
    end
end
