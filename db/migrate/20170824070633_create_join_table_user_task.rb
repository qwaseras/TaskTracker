class CreateJoinTableUserTask < ActiveRecord::Migration[5.1]
  def change
    create_join_table :users, :tasks do |t|
      t.index [:user_id, :task_id]
    end
  end
end
