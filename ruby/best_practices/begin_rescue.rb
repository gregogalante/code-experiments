# Begin and rescue usage.

puts 'Simple structure:'

begin
  puts undefined_variable
rescue => e
  puts e # -> undefined local variable or method `undefined_variable' for main:Object
end

puts 'Complete structure:'

begin
  # something which might raise an exception
rescue => e
  # code that deals with some exception
else
  # code that runs only if *no* exception was raised
ensure
  # ensure that this code always runs, no matter what
end

begin
  puts undefined_variable
rescue => e
  puts e # -> undefined local variable or method `undefined_variable' for main:Object
else
  puts 'good work ;)'
ensure
  puts 'i will be executed :)' # -> i will be executed :)
end

begin
  defined_variable = 1
  puts defined_variable # -> 1
rescue => e
  puts e
else
  puts 'good work ;)' # -> good work ;)
ensure
  puts 'i will be executed :)' # -> i will be executed :)
end