# *** Obserbo ***
# Simple observers support to rails models

# Version 1.0
# Gregorio Galante

module Obserbo

  # initialize empty observers list
  def initialize_observers
    @observers = []
  end

  # notify all observers with args
  def notify_observers(*args)
    @observers.each do |observer|
      observer.update(*args)
    end
  end

  # add new observer on observers list
  def add_observer(observer)
    @observers << observer
  end

  # remove observer from observers list
  def delete_observer(observer)
    @observers.delete(observer)
  end

  # TODO: Create a Ruby gem

end
