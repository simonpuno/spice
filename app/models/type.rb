# == Schema Information
#
# Table name: types
#
#  id         :bigint           not null, primary key
#  biz_type   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Type < ApplicationRecord 
    validates :biz_type, presence: true

    has_many :business_ids,
        primary_key: :id,
        foreign_key: :type_id,
        class_name: :BusinessType

    has_many :businesses,
        through: :business_ids,
        source: :businesses
end
