class Todo < ActiveRecord::Base
  validates :title, :done, presence: true
  has_many :steps, :dependent => :delete
end
