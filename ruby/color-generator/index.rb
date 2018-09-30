def string_to_colour(str)
  hash = 0
  str.split('').each do |char|
    hash = char.ord + ((hash << 2) - hash)
  end
  colour = '#'
  3.times do |i|
    value = (hash >> (i * 8)) & 0xFF
    colour += ('00' + value.to_s(16))[-2..-1]
  end
  colour
end

puts(string_to_colour('ciaolisa'))
