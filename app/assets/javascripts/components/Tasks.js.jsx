var Tasks = React.createClass({
  render() {
    return(
      <div>
  			{this.props.tasks.map(function(task, index){
  					return(
                  <div>
                    <a href = {"/tasks/" + task.id}>{task.title}</a>
                  </div>
  					)
  					}
  				)}
  				</div>
    )
  }
})
