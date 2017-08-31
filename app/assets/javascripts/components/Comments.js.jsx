var Comments = React.createClass({

  getInitialState(){
		return{
			comments: this.props.comments,
		}
  },

  componentWillMount() {
    CommentStore.listen(this.onChange)
    console.log(this.props)
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

  handleUpdate(comment, id) {
    console.log(comment, id)
   CommentActions.updateComment(comment, id)
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

  			{this.state.comments.map((comment) =>{
  					return(
              <Comment comment = {comment} key = {comment.id} handleDelete={this.handleDelete} handleUpdate = {this.handleUpdate}/>
					        )
  					}
  				)}
			</div>
    </div>
    )
  }
})
