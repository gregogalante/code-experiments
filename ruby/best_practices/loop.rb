# Loop usage.

puts 'Bad example for variable scope:'

for x in [1, 2, 3, 4, 5] do
  # ...
end

puts x # -> 5

puts 'Good example for variable scope:'

[1, 2, 3, 4, 5].each do |y|
  # ...
end

begin
  puts y
rescue => e
  puts e # -> undefined local variable or method 'y' for main:Object
end

puts 'Good example of each on one line:'

[1, 2, 3, 4, 5].each { |z| puts z }