# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  zip             :integer          not null
#  birthday        :date
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord 

    validates :email, :session_token, presence: true, uniqueness: true 
    validates :first_name, :last_name, :zip, :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :reviews,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Review 

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.is_password?(password)
            return user 
        else
            return nil 
        end
    end

    def is_password?(password)
        pass_obj = BCrypt::Password.new(self.password_digest)
        pass_obj.is_password?(password)
    end

    def self.generate_session_token 
        SecureRandom.urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token 
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save! 
        self.session_token 
    end
end
