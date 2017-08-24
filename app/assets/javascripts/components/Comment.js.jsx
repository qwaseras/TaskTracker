var Comment = React.createClass({
  render() {
    return(
      <div className="list-group">
              <div  className="list-group-item list-group-item-action flex-column align-items-start" key = {this.props.comment.id}>
                <div className="d-flex w-100 justify-content-start">
                    <small>from user &nbsp;</small><h6>{this.props.comment.commenter_full_name}</h6>
                </div>
                <p className="mb-1">{this.props.comment.title}</p>
                <small>{this.props.comment.created_at}</small><br/>
              </div>
		</div>
    )
  }
})
