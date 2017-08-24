var Comment = React.createClass({

  getInitialState: function(){
		return{
			comment: this.props.comment
		}
  },

  handleDelete: function(id) {
      this.props.handleDelete(id);
  },

  render() {
    return(
      <div className="list-group">
              <div  className="list-group-item list-group-item-action flex-column align-items-start" >
                <div className="d-flex w-100 justify-content-start">
                    <small>from user &nbsp;</small><h6>{this.state.comment.commenter_full_name}</h6>
                </div>
                <p className="mb-1">{this.state.comment.title}</p>
                <small>{this.state.comment.created_at}</small><br/>
                 <button onClick={this.handleDelete.bind(this, this.state.comment.id)} >Delete</button>
              </div>
		</div>
    )
  }
})
