# Custom Singleton code.

# Definition:

# In software engineering, the singleton pattern is a software design pattern that
# restricts the instantiation of a class to one object. This is useful when exactly
# one object is needed to coordinate actions across the system. The concept is sometimes
# generalized to systems that operate more efficiently when only one object exists,
# or that restrict the instantiation to a certain number of objects. The term comes
# from the mathematical concept of a singleton.

# Logger class.
class Logger

  def initialize
    @log = File.open('log.txt', 'a')
  end

  @@instance = Logger.new

  def self.instance
    @@instance
  end

  def log(msg)
    @log.puts(msg)
  end

  private_class_method :new # new is private so it's not possible to create new objects.
end

Logger.instance.log('message')