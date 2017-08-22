json.extract! comment, :id, :title, :task_id, :user_id, :created_at, :updated_at
json.url comment_url(comment, format: :json)
