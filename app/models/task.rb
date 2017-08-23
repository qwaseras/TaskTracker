class Task < ApplicationRecord
   has_many :comments
   belongs_to :project

   Task::Status = ["Satus1", "Status2"]
end
