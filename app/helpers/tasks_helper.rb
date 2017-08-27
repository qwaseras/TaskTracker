module TasksHelper
  def tasks_react(project)
    react_tasks = []
    project.tasks.each do |task|
      react_tasks << full_task(task)
    end
    react_tasks
  end

  def full_task(task)
    {
      id: task.id,
      title: task.title,
      description: task.description,
      user_ids: task.user_ids
    }
  end
end
