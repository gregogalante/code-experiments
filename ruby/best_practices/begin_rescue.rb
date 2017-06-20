# Begin and rescue usage.

puts 'Simple structure:'

begin
  puts undefined_variable
rescue => e
  puts e # -> undefined local variable or method `undefined_variable' for main:Object
end