var FullTask = React.createClass({

  getInitialState: function(){
    return{
      task: this.props.task,
      editable: false
    }
  },

  handleDelete() {
    $.ajax(
      {
        url: `/tasks/${this.state.task.id}`,
        type: 'DELETE',
        success:() => {console.log(`task with id ${this.state.task.id} deleted`)}
      }
    );
  },

  handleEdit() {
    if(this.state.editable) {
       var task = {title: this.ref_title.value, description: this.ref_description.value};
       $.ajax({
         url: `/tasks/${this.state.task.id}}`,
         type: 'PUT',
         data: { task: task },
         success:(response) => {this.editTask(response); console.log(response)}
         } );
     }
      this.setState({editable: !this.state.editable});

   },
   editTask(task){
    this.setState({task: task});
    console.log(this.state.task)
   },

  render() {
    var title = this.state.editable ?
                    <input type='text'
                           ref={(c) => this.ref_title = c}
                           defaultValue={this.state.task.title} /> :
                           <h2>{this.state.task.title}</h2> ;
   var description = this.state.editable ?
             <input type='text'
                    ref={(c) => this.ref_description = c}
                    defaultValue={this.state.task.description}
             /> :
                    <span>{this.state.task.description}</span>;
    return(
      <div className = "list-group">
        <div className = "box" style = {{minHeight: '200px'}}>
           Task for project <em>{this.props.project_title}</em><br/>
           {title}
          <strong>Description: </strong><p>{description}</p>
        </div>

        <div className = "box">
          <button onClick={this.handleEdit}  className =  "btn btn-primary">
            {this.state.editable ? 'Submit' : 'Edit' }
          </button>
          <button onClick={this.handleDelete}
                  className = "btn btn-danger" >
            Delete
          </button>
        </div>
      </div>
    )
  }
})
