var Projects = React.createClass({
  getInitialState(){
    return{
      projects: this.props.projects,
    }
  },
  handleCreate(project){
       $.ajax({
            url: '/projects',
             type: 'POST',
             data: { project },
             success: (response) => { console.log('project added', response); this.addProject(response) }
            })
        },

   addProject(project) {
       var newState = this.state.projects.concat(project);
       this.setState({ projects: newState });
    },

  render() {
    var form = this.props.current_user_role == "manager" ?
        <ProjectForm onFormSubmit = {this.handleCreate}/> : null;
    return(
    <div className="list-group">
      {form}
  			{this.state.projects.map(function(project){
  					return(
                      <a href = {"/projects/" + project.id}  className="list-group-item list-group-item-action" key = {project.id}>{project.title}</a>
  					 )
  					}
  				)}
  		</div>
    )
  }
})
