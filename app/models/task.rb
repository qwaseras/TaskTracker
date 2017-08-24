class Task < ApplicationRecord
   has_many :comments
   belongs_to :project
   belongs_to :user

   Task::Status = ['waiting', 'implementation', 'verifying', 'releasing']
end
