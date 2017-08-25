var TaskForm = React.createClass({

  getInitialState: function(){
		return{
			// user: this.props.current_user,
      // task: this.props.task
		}
  },

  handleSubmit: function(e){
  		e.preventDefault();
      var task = {title : this.task_title.value, description: this.task_description.value}
  		this.props.onFormSubmit(task);
  },

  render() {
    return(
      <div >
          <h5>New task</h5>
          <form className="form-inline" id="new_task" onSubmit={this.handleSubmit} className = "form-horizontal">
            <input name="authenticity_token" value="x+FKyoLXBS9C3gC9e08ZYC9LFSK+ECkXkxITbX9E74EhoSDhbZsPFlsogKM6vkS3SfsBxAK/MN+2VdxFwhc2ag==" type="hidden" />
            <input ref={(c) => this.task_title = c} id="task_title" name="title" type="text" onChange = {this.handleChange} placeholder = "Type task title" /><br/>
            <input ref={(c) => this.task_description = c} id="task_title" name="title" type="text" onChange = {this.handleChange} placeholder = "Type task description" /><br/>
            <input name="commit" value="Send" data-disable-with="Send" type="submit" />
          </form>
      </div>
    )
  }
})
