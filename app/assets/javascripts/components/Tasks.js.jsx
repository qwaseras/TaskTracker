var Tasks = React.createClass({
  render() {
    return(
      <div className ="list-group">
  			{this.props.tasks.map(function(task, index){
  					return(
                <Task task = {task}/>
  					)
  					}
  				)}
  				</div>
    )
  }
})
