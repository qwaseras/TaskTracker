var Comment = React.createClass({

  getInitialState: function(){
		return{
			comment: this.props.comment
		}
},

  render() {
    return(
      <div className="list-group">
              <div  className="list-group-item list-group-item-action flex-column align-items-start" key = {this.state.comment.id}>
                <div className="d-flex w-100 justify-content-start">
                    <small>from user &nbsp;</small><h6>{this.state.comment.commenter_full_name}</h6>
                </div>
                <p className="mb-1">{this.state.comment.title}</p>
                <small>{this.state.comment.created_at}</small><br/>
              </div>
		</div>
    )
  }
})
