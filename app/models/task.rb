class Task < ApplicationRecord
   has_many :comments
   belongs_to :project

   Task::Status = ['waiting', 'implementation', 'verifying', 'releasing']
end
