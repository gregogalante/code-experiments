# Loop examples:

puts 'Bad example for variable scope:'

for x in [1, 2, 3, 4, 5] do
  puts x
end

puts x # x exists outside the loop

puts 'Good example for variable scope:'

[1, 2, 3, 4, 5].each do |y|
  puts y
end

begin
  puts y # y not exists outside the loop
rescue => e
  puts e
end

puts 'Good example of each on one line:'

[1, 2, 3, 4, 5].each { |z| puts z }

# Spat operator usage:

puts 'Spat operator usage on functions:'

def say_hello(*names)
  names.each { |name| puts "hello #{name}" }
end

say_hello('Pippo', 'Mario', 'Luigi')

puts 'Spat operator usage on variables:'

names = 'Pippo Mario Luigi Francesco Antonio'
first, *others, last = names.split(' ')

puts first.class
puts others.class
puts last.class

# Double bang to check if variable exist:

class Person

  def initialize(surname, name = nil)
    @name = name
    @surname = surname
  end

  def name?
    !!@name
  end

  # rubocop not likes the double negation and prefer
  # the usage of .nil? function
  def name_better_for_rubocop?
    !@name.nil?
  end

end

pippo = Person.new('Baudo', 'Pippo')
puts pippo.name?
puts pippo.name_better_for_rubocop?

rossi = Person.new('Rossi')
puts rossi.name?
puts rossi.name_better_for_rubocop?
