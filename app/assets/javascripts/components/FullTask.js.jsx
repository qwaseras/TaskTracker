var FullTask = React.createClass({

  getInitialState: function(){
    return{
      task: this.props.task,
      editable: false
    }
  },

  handleDelete: function(id) {
    $.ajax(
      {
        url: `/tasks/${id}`,
        type: 'DELETE',
        success:() => {console.log(`task with id ${id} deleted`)}
      }
    );
  },

  handleEdit() {
    if(this.state.editable) {
       var task = {id: this.state.task.id, title: this.ref_title.value, description: this.ref_description.value};
       console.log(task)
       $.ajax({
         url: `/tasks/${task.id}}`,
         type: 'PUT',
         data: { task: task },
         } );
     }
      this.setState({editable: !this.state.editable});

   },

  render() {
    var title = this.state.editable ?
              <input type='text'
                     ref={(c) => this.ref_title = c}
                     defaultValue={this.props.task.title} /> :
                    <h2>{this.props.task.title}</h2>;
   var description = this.state.editable ?
             <input type='text'
                    ref={(c) => this.ref_description = c}
                    defaultValue={this.props.task.description} /> :
                    <strong>{this.props.task.description}</strong>;
    return(
      <div className = "list-group">
          <button onClick={this.handleDelete.bind(this, this.state.task.id)} >Delete</button>
          <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' }  </button>
          {title}
          {description}
      </div>
    )
  }
})
