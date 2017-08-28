class Task < ApplicationRecord
   has_many :comments, dependent: :destroy
   belongs_to :project
   has_and_belongs_to_many :users

   validates  :title, presence: true


   Task::Status = ['waiting', 'implementation', 'verifying', 'releasing']
end
