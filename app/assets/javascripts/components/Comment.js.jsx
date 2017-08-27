var Comment = React.createClass({

  getInitialState: function(){
		return{
			comment: this.props.comment,
      editable: false
		}
  },

  handleDelete: function(id) {
      this.props.handleDelete(id);
  },

  handleEdit() {
    if(this.state.editable) {
       var comment = { title: this.ref_title.value};
       this.props.handleUpdate(comment, this.state.comment.id);
     }
      this.setState({editable: !this.state.editable});
   },

  render() {
    var title = this.state.editable ?
              <input type='text'
                     ref={(c) => this.ref_title = c}
                     defaultValue={this.props.comment.title} /> :
              <p  className="mb-1">{this.props.comment.title}</p>;
    return(
      <div className="list-group">
              <div  className="list-group-item list-group-item-action flex-column align-items-start" >
                <div className="d-flex w-100 justify-content-start">
                    <small>from user &nbsp;</small><h6>{this.state.comment.commenter_full_name}</h6>
                </div>
                {title}
                <small>{this.state.comment.created_at}</small><br/>
                <button onClick={this.handleDelete.bind(this, this.state.comment.id)} >Delete</button>
                <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' }  </button>
              </div>
		</div>
    )
  }
})
