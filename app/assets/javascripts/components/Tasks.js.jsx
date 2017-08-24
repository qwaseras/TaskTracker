var Tasks = React.createClass({
  render() {
    return(
      <div className ="list-group">
  			{this.props.tasks.map(function(task, index){
  					return(
                  <div>
                    <a href = {"/tasks/" + task.id} className="list-group-item list-group-item-action">{task.title}</a>
                  </div>
  					)
  					}
  				)}
  				</div>
    )
  }
})
