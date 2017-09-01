var Comments = React.createClass({

  getInitialState(){
		return{
			comments: this.props.comments,
		}
  },

  componentWillMount() {
    CommentStore.listen(this.onChange)
    CommentActions.initData(this.props)
  },

  componentWillUnmount() {
    CommentStore.unlisten(this.onChange)
  },

  onChange(state){
    this.setState(state)
  },

  handleSubmit(comment){
    comment.task_id = this.props.task_id,
    CommentActions.submitComment(comment)
  },


  handleDelete(id) {
   CommentActions.deleteComment(id)

    },

  handleUpdate(comment) {
    CommentActions.updateComment(comment)
      },


  render() {
    return(
    <div>
      <div className="list-group container">
        <div className="row">
            <div className="col">
              <h3>Comments</h3>
            </div>
            <div className="col">
              <CommentForm onFormSubmit={this.handleSubmit}/>
            </div>
        </div>

  			{this.state.comments.map((comment, index) =>{
  					return(
              <Comment comment = {comment} key = {index} handleDelete={this.handleDelete} handleUpdate = {this.handleUpdate}/>
					        )
  					}
  				)}
			</div>
    </div>
    )
  }
})
