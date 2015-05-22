class Step < ActiveRecord::Base
  # validates :body, :todo_id, :done, presence: true
  belongs_to :todo
end
