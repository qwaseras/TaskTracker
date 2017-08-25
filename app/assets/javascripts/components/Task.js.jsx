var Task = React.createClass({

  render() {
    return(
      <div className = "list-group">
        <a href = {"/tasks/" + this.props.task.id} className="list-group-item list-group-item-action">{this.props.task.title}</a>
      </div>
    )
  }
})
