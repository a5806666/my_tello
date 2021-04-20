class Card < ApplicationRecord
  acts_as_list scope: :list

  belongs_to :list

  vaildates :name, presence :true
end
