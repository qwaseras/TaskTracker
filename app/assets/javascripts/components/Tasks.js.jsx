var Tasks = React.createClass({

  getInitialState: function(){
    return{
      tasks: this.props.tasks,
      project_id: this.props.project_id
    }
  },


  handleSubmit: function(task){
    task.project_id = this.state.project_id
       $.ajax({
            url: '/tasks',
             type: 'POST',
             data: { task },
             success: () => { console.log('task added', task.title); this.addTask(task) }
            })
        },

      addTask(task) {
        var newState = this.state.tasks.concat(task);
        this.setState({ comments: newState })
       },

  render() {
    return(
      <div className ="list-group">
  			{this.state.tasks.map(function(task, index){
  					return(
                <Task task = {task}/>
  					)
  					}
  				)}

            <TaskForm onFormSubmit={this.handleSubmit}/>

  				</div>
    )
  }
})
