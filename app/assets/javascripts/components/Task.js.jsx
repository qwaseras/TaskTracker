var Task = React.createClass({

  getInitialState: function(){
    return{
      task: this.props.task,
      editable: false
    }
  },

  render() {
    return(
      <div className = "list-group">
         <a href = {"/tasks/" + this.state.task.id} className="list-group-item list-group-item-action">{this.props.task.title}</a>
      </div>
    )
  }
})
