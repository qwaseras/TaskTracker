module CommentsHelper

  def comments_react(task)
    react_comments = []
    task.comments.each do |comment|
      react_comments << full_comment(comment)
    end
    react_comments
  end

  def full_comment(comment)
    {
      id: comment.id,
      title: comment.title,
      commenter_full_name: comment.user.first_name + " " + comment.user.second_name,
      created_at: comment.created_at
    }
  end

end
