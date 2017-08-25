var Task = React.createClass({

  getInitialState: function(){
    return{
      task: this.props.task,
      editable: false
    }
  },

  handleDelete: function(id) {
      this.props.handleDelete(id);
  },

  handleEdit() {
    if(this.state.editable) {
       var task = {id: this.state.task.id, title: this.ref_title.value};
       this.props.handleUpdate(task);
     }
      this.setState({editable: !this.state.editable});
   },

  render() {
    var title = this.state.editable ?
              <input type='text'
                     ref={(c) => this.ref_title = c}
                     defaultValue={this.props.task.title} /> :
                     <a href = {"/tasks/" + this.state.task.id} className="list-group-item list-group-item-action">{this.props.task.title}</a>
;
    return(
      <div className = "list-group">
          <button onClick={this.handleDelete.bind(this, this.state.task.id)} >Delete</button>
          {title}
          <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' }  </button>
      </div>
    )
  }
})
