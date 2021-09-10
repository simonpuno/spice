# == Schema Information
#
# Table name: businesses
#
#  id          :bigint           not null, primary key
#  biz_name    :string           not null
#  type_id     :integer          not null
#  address     :string           not null
#  city_id     :integer          not null
#  zip_code    :integer
#  hours       :string           not null
#  description :text
#  lat         :float
#  lng         :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Business < ApplicationRecord 
    validates :biz_name, :type_id, :address, :city_id, :hours, presence: true
    
    has_many :reviews,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Review 

    # has_one_attached :photo
    has_many_attached :photos
end
