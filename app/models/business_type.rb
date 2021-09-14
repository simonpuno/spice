# == Schema Information
#
# Table name: business_types
#
#  id          :bigint           not null, primary key
#  business_id :integer          not null
#  type_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class BusinessType < ApplicationRecord 
    validates :business_id, :type_id, presence: true 

    belongs_to :business,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Business
    
    belongs_to :types,
        primary_key: :id,
        foreign_key: :type_id,
        class_name: :Type
end
