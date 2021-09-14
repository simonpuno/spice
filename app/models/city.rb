# == Schema Information
#
# Table name: cities
#
#  id         :bigint           not null, primary key
#  city       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class City < ApplicationRecord 
    validates :city_name, presence: true, uniqueness: true
end
