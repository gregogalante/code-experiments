# Double negation usage.

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
puts pippo.name? # -> true
puts pippo.name_better_for_rubocop? # -> true

rossi = Person.new('Rossi')
puts rossi.name? # -> false
puts rossi.name_better_for_rubocop? # -> false
