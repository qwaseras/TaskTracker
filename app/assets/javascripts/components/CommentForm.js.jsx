var CommentForm = React.createClass({

  getInitialState(){
		return{
      task: this.props.task
		}
  },

  handleSubmit(e){
    var comment = {title: this.comment_title.value}
    this.props.onFormSubmit(comment);
    this.comment_title.value = ""
  },

  render() {
    return(
      <div >
            <input ref={(c) => this.comment_title = c} id="comment_title" name="title" type="text" onChange = {this.handleChange} placeholder="Type your comment" />
            <button name="commit" value="Send" data-disable-with="Send" type="submit" onClick={this.handleSubmit}>
              Add
            </button>
      </div>
    )
  }
})
