# Spat operator usage.

puts 'Spat operator usage on functions:'

def say_hello(*names)
  names.each { |name| puts "hello #{name}" }
end

say_hello('Pippo', 'Mario', 'Luigi') # -> hello Pippo \n hello Mario \n hello Luigi

puts 'Spat operator usage on variables:'

names = 'Pippo Mario Luigi Francesco Antonio'
first, *others, last = names.split(' ')

puts first.class # -> String
puts others.class # -> Array
puts last.class # -> String