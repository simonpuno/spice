# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  content     :text             not null
#  rating      :integer          not null
#  user_id     :integer          not null
#  business_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord 
    validates :content, :rating, :user_id, :business_id, presence: true 
    validates :user_id, uniqueness: {scope: :business_id}

    belongs_to :author,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User 

    belongs_to :business,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Business
end
