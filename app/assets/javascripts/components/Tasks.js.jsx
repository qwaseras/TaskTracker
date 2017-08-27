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

    allTasks() {
      this.setState({ tasks: this.props.tasks });
     },

    myTasks(){
       this.setState({ tasks: this.props.tasks.filter((i) => {return i.user_ids.includes(this.props.current_user_id)}) });
     },

  render() {
    return(
      <div className ="list-group">
      <TaskForm onFormSubmit={this.handleSubmit}/>
      <label>
      <input type="radio" id="radioAll" name="site_name"
                                   onChange={this.allTasks} defaultChecked />
                                   All Tasks</label>
      <label>
      <input type="radio" id = "radioMy" name="site_name"
                                  onChange={this.myTasks} />
                                  My Tasks</label>

  			{this.state.tasks.map((task) => {
  					return(
                <Task task = {task} key = {task.id} handleDelete={this.handleDelete} handleUpdate = {this.handleUpdate}/>
  					)
  					}
  				)}


  				</div>
    )
  }
})
