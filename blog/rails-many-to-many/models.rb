# models/movie.rb
class Movie < ActiveRecord::Base
  has_many :showtimes, :dependent => :destroy
  has_many :theatres, through: :showtimes
end

# models/theatre.rb
class Theatre < ActiveRecord::Base
  has_many :showtimes, :dependent => :destroy
  has_many :movies, through: :showtimes
end

# models/showtime.rb
class ShowTime < ActiveRecord::Base
  belongs_to :movie
  belongs_to :theatre
end
