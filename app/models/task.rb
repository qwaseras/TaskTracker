class Task < ApplicationRecord
   has_many :comments
   belongs_to :project
   has_and_belongs_to_many :users

   Task::Status = ['waiting', 'implementation', 'verifying', 'releasing']
end
