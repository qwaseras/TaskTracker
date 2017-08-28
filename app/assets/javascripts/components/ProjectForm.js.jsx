var ProjectForm = React.createClass({

  getInitialState: function(){
		return{
    create: false
		}
  },

  handleSubmit: function(e){
      if(this.state.create) {
        var project = {title : this.project_title.value}
    		this.props.onFormSubmit(project);
       }
        this.setState({create: !this.state.create});
  },

  render() {
  var project = this.state.create ?
                        <div>
                          <input ref={(c) => this.project_title = c} id="project_title" name="title" type="text" onChange = {this.handleChange} placeholder = "Type project title" /><br/>
                        </div>:
                        null
                         ;
    return(
      <div>
        {project}
        <button onClick={this.handleSubmit}  className =  "float-right btn btn-success">{this.state.create ? 'Create project' : 'New project' }</button>
      </div>
    )
  }
})
