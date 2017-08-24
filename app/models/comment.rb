class Comment < ApplicationRecord
  belongs_to :task
  belongs_to :user
  validates  :title, presence: true
end
