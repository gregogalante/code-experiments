# Datetime usage.

require 'date'

puts 'DateTime new vs now:'

new_dt = DateTime.new
now_dt = DateTime.now

puts new_dt
puts now_dt

puts (new_dt == now_dt) # -> false

puts 'DateTime constructor:'

complete_dt = DateTime.new(2001, 2, 3, 4, 5, 6)
puts complete_dt # -> 2001-02-03T04:05:06+00:00

begin
  DateTime.new(2001, 13, 3, 4, 5, 6)
rescue => e
  puts e # -> invalid date
end

fractional_dt = DateTime.new(2001, 2, 3.5)
# NB: Note the Time 12:00
puts fractional_dt # -> 2001-02-03T12:00:00+00:00

puts 'DateTime access to time:'

puts complete_dt.year # -> 2001
puts complete_dt.month # -> 2
puts complete_dt.day # -> 3
puts complete_dt.hour # -> 4
puts complete_dt.min # -> 5
puts complete_dt.sec # -> 6
