var TaskForm = React.createClass({

  getInitialState(){
		return{
      create: false
		}
  },

  handleSubmit(e){

      if(this.state.create) {
        var task = {title : this.task_title.value, description: this.task_description.value}
    		this.props.onFormSubmit(task);
       }
        this.setState({create: !this.state.create});
  },

  render() {
  var task = this.state.create ?
                        <div>
                          <input ref={(c) => this.task_title = c} id="task_title" name="title" type="text" onChange = {this.handleChange} placeholder = "Type task title" /><br/>
                          <textarea ref={(c) => this.task_description = c} id="task_title" name="title" type="textarea" onChange = {this.handleChange} placeholder = "Type task description" /><br/>
                        </div>:
                        null ;
    return(
      <div>
        {task}
        <button onClick={this.handleSubmit}  className =  "float-right btn btn-success">{this.state.create ? 'Create task' : 'New task' }</button>
      </div>
    )
  }
})
