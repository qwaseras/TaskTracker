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

   handleDelete: function(id) {
      $.ajax(
        {
          url: `/tasks/${id}`,
          type: 'DELETE',
          success:() => { this.removeTask(id); console.log(`task with id ${id} deleted`)}
        }
      );
     },

   handleUpdate(task) {
       $.ajax({
         url: `/tasks/${task.id}}`,
         type: 'PUT',
          data: { task: task },
          success: () => {
                           this.updateTask(task);
                          }
         } )
       },


   addTask(task) {
     var newState = this.state.tasks.concat(task);
     this.setState({ tasks: newState })
    },

   updateTask(task) {
     var tasks = this.state.tasks.filter((i) => { return i.id != task.id });
     tasks.push(task);
     this.setState({tasks: tasks });
   },

   removeTask: function(id){
      var tasks = this.state.tasks.filter((task) => { return task.id != id; });
      this.setState({ tasks: tasks });
    },

  render() {
    return(
      <div className ="list-group">
      <TaskForm onFormSubmit={this.handleSubmit}/>
  			{this.state.tasks.reverse().map((task) => {
  					return(
                <Task task = {task} key = {task.id} handleDelete={this.handleDelete} handleUpdate = {this.handleUpdate}/>
  					)
  					}
  				)}


  				</div>
    )
  }
})
